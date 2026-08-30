const deleteItem = async (
  endpoint,
  url,
  title,
  confirmMessage = "هل أنت متأكد من عملية الحذف؟",
  onSuccess,
) => {
  try {
    const confirmation = confirm(confirmMessage);
    if (!confirmation) return;

    const fullUrl = `${process.env.NEXT_PUBLIC_API}/admin/api/${endpoint}?${endpoint === 'links' ? 'href' : url ? 'url' : 'title'}=${url ? encodeURIComponent(url) : title}`;

    const response = await fetch(fullUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "حدث خطأ أثناء الحذف.");
      throw new Error(data.message || "Failed to delete item.");
    }

    alert(data.message || "تم الحذف بنجاح.");

    if (typeof onSuccess === "function") {
      onSuccess(data);
    } else {
      window.location.reload();
    }
  } catch (error) {
    alert(error.message || "حدث خطأ أثناء الحذف.");
  }
};

export default deleteItem;
const authAdmin = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/admin/isLoggedIn`, {
        credentials: 'include',
        method: 'GET',
      }
    );

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.message);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error.message;
  }
}

export default authAdmin;
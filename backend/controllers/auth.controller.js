export const signup = async (req, res) => {
  try {
    res.json({
      data: "you hit the signup endpoint",
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const login = async (req, res) => {
  try {
    res.json({
      data: "you hit the signup endpoint",
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const logout = async (req, res) => {
  try {
    res.json({
      data: "you hit the signup endpoint",
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

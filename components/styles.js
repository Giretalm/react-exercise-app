import { StyleSheet } from "react-native";

const colors = {
  background: "#edeaef",
  primary: "#9f5f91",
  secondary: "#572c57",
  highlight: "#e26972",
  counters: "#9c8705", 
  reset: "#931b1b",
  sug: "#b27428",
  stop: "#c74a31",
};

export default StyleSheet.create({

  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
  },

  title: {
    fontSize: 50,
    color: colors.secondary,
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 32,
    color: colors.primary,
    marginBottom: 20,
    textAlign: "center",
  },

  counter: {
    fontSize: 30,
    color: colors.counters,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  button: {
    margin: 5,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: colors.primary,
  },

  stopButton: {
    margin: 5,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: colors.stop,
  },

   resetButton: {
    margin: 5,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: colors.reset,
  },
   
    sugButton: {
    margin: 5,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: colors.sug,
    
  },
    
    homeButton: {
    margin: 5,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: colors.secondary,
  },

  lapText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    textAlign: "center",
    marginVertical: 2,
  },
});
export default function handler(req, res) {
  console.log('hello hit')
  res.status(200).json({ text: "Hello" });
}

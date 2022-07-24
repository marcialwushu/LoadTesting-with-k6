using JSTest;
using JSTest.ScriptLibraries;
using LoadTesting.Tests.Helpers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace LoadTesting.Tests
{
    [TestClass]
    public class UnitTest
    {
        [TestMethod]
        public void TestMethod()
        {
            var script = new TestScript();

            // Arrange: Append the JavaScript code to test.
            string scriptContents = (new AssemblyHelper().GetContentsEmbededResourceFile("LoadTesting.Tests.LoadTesting.Api.Scripts.Person.js"));
            script.AppendBlock(scriptContents);

            // Arrange: Append the JSTest asser library, so we can assert the test code.
            script.AppendBlock(new JsAssertLibrary());

            // Append "Act" JavaScript code.
            script.AppendBlock("var person1 = new Person('John Do', 32, 'Software Engineer');");

            // Assert.
            script.RunTest(@"assert.equal('Jonh Do test', person1.sayName());");
        }
    }
}

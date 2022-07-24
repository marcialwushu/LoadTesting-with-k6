using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace LoadTesting.Tests.Helpers
{
    public class AssemblyHelper
    {
        /// <summary>
        /// Read the contents of an embededresourcefile with the given name.
        /// </summary>
        /// <param name="resourceName">Name of the resource.</param>
        /// <returns></returns>
        public string GetContentsEmbededResourceFile(string resourceName)
        {
            if (string.IsNullOrWhiteSpace(resourceName)) { throw new ArgumentNullException("resourceName"); }

            string contents = string.Empty;
            using (Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(resourceName))
            using (var reader = new StreamReader(stream))
            {
                contents = reader.ReadToEnd();
            }
            return contents;
        }
    }
}

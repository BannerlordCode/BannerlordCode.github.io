# XML Parsing Bug Analysis Report

> Version: Bannerlord v1.3.15  
> Analysis Scope: TaleWorlds.ObjectSystem

---

## Bug 1: LoadXML() Silently Swallows All Exceptions

**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectManager.cs`  
**Line**: ~541-543  
**Severity**: Critical

### What Happens
Any exception during XML loading is silently swallowed. Modders see no error message, but the XML may not be loaded correctly at all.

### Root Cause
```csharp
public void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)
{
    bool flag = skipXmlFilterForEditor || isDevelopment;
    XmlDocument mergedXmlForManaged = MBObjectManager.GetMergedXmlForManaged(id, false, flag, gameType);
    try
    {
        this.LoadXml(mergedXmlForManaged, isDevelopment);
    }
    catch (Exception)  // Empty catch block, swallows all exceptions
    {
    }
}
```

### Trigger Condition
- XML syntax error
- XML missing required elements
- XML references non-existent objects

### Error/Impact
- Exception completely swallowed, no log output
- XML may be partially loaded
- Game behavior becomes unpredictable

### Example
```xml
<!-- Missing </Items> closing tag -->
<Items>
    <Item id="test_item">
        <name>Test</name>
</Items>
```

---

## Bug 2: MBObjectBase.Deserialize() Missing id Attribute Null Check

**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectBase.cs`  
**Line**: ~85  
**Severity**: Critical

### What Happens
When an XML element is missing the `id` attribute, directly calling `.Value` causes a `NullReferenceException` crash.

### Root Cause
```csharp
public virtual void Deserialize(MBObjectManager objectManager, XmlNode node)
{
    this.Initialize();
    this.StringId = node.Attributes.get_ItemOf("id").Value;  // If id doesn't exist, get_ItemOf returns null, .Value throws
}
```

### Trigger Condition
XML element missing `id` attribute

### Error/Impact
```
NullReferenceException: Object reference not set to an instance of an object.
   at TaleWorlds.ObjectSystem.MBObjectBase.Deserialize(...)
```

### Example
```xml
<!-- Missing id attribute -->
<Items>
    <Item>
        <name>Test Item</name>
    </Item>
</Items>
```

---

## Bug 3: LoadXml() Missing id Attribute Null Check During Node Iteration

**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectManager.cs`  
**Line**: ~1249  
**Severity**: Critical

### What Happens
Similar to Bug 2, when iterating through nodes in the `LoadXml()` method, the `id` attribute value is accessed directly without null check.

### Root Cause
```csharp
for (XmlNode xmlNode = doc.ChildNodes.get_ItemOf(i).ChildNodes.get_ItemOf(0); xmlNode != null; xmlNode = xmlNode.NextSibling)
{
    if (xmlNode.NodeType != XmlNodeType.Comment)
    {
        string value = xmlNode.Attributes.get_ItemOf("id").Value;  // May crash
        MBObjectBase presumedObject = this.GetPresumedObject(text, value, true);
        presumedObject.Deserialize(this, xmlNode);
        presumedObject.AfterInitialized();
    }
}
```

### Trigger Condition
- XML comment nodes accidentally processed as elements
- XML element genuinely missing id attribute

### Error/Impact
Game crashes, modder has no idea which XML file or line caused the problem.

---

## Bug 4: LoadOneXmlFromFile() Silently Swallows Exceptions

**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectManager.cs`  
**Line**: ~845-847  
**Severity**: High

### What Happens
The `LoadOneXmlFromFile()` method catches all exceptions but does nothing.

### Root Cause
```csharp
public void LoadOneXmlFromFile(string xmlPath, string xsdPath, bool skipValidation = false)
{
    try
    {
        XmlDocument xmlDocument = MBObjectManager.CreateDocumentFromXmlFile(xmlPath, xsdPath, skipValidation);
        this.LoadXml(xmlDocument, false);
    }
    catch (Exception)  // Empty catch block
    {
    }
}
```

### Trigger Condition
XML file doesn't exist, XML format error, XSD validation failure

### Error/Impact
- File loading fails but no notification
- Game may be missing content with no way to find the cause

---

## Bug 5: LoadXMLFromFileSkipValidation() Silently Swallows Exceptions

**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectManager.cs`  
**Line**: ~858-860  
**Severity**: High

### What Happens
The `LoadXMLFromFileSkipValidation()` method catches exceptions and returns null, but there's no logging.

### Root Cause
```csharp
public XmlDocument LoadXMLFromFileSkipValidation(string xmlPath, string xsdPath)
{
    XmlDocument xmlDocument;
    try
    {
        xmlDocument = MBObjectManager.CreateDocumentFromXmlFile(xmlPath, xsdPath, true);
    }
    catch  // Empty catch block
    {
        xmlDocument = null;
    }
    return xmlDocument;
}
```

### Trigger Condition
XML file read failure

### Error/Impact
Caller receives null but doesn't know why

---

## Bug 6: LoadXmlWithValidation() Silently Swallows Exceptions

**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectManager.cs`  
**Line**: ~930-933  
**Severity**: High

### What Happens
Exceptions during XML loading are caught but only the URI is recorded, with no other error information.

### Root Cause
```csharp
try
{
    XmlReader xmlReader = XmlReader.Create(new StreamReader(xmlPath), xmlReaderSettings);
    xmlDocument.Load(xmlReader);
    xmlReader.Close();
    // ... second validation ...
}
catch (Exception)
{
    string localPath = new Uri(xmlDocument.BaseURI).LocalPath;  // Only gets path, doesn't log exception
}
```

### Trigger Condition
XML format error or doesn't comply with XSD specification

### Error/Impact
Validation errors ignored, XML may load invalid data

---

## Bug 7: ValidationEventHandler Only Logs, Doesn't Stop Loading

**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectManager.cs`  
**Line**: ~1178-1198  
**Severity**: Medium

### What Happens
The XSD validation event handler only prints error/warning messages and does not stop the XML loading process.

### Root Cause
```csharp
private static void ValidationEventHandler(object sender, ValidationEventArgs e)
{
    XmlReader xmlReader = (XmlReader)sender;
    string text = string.Empty;
    XmlSeverityType severity = e.Severity;
    if (severity != null)
    {
        if (severity == 1)
        {
            text = text + "Warning: " + e.Message;
        }
    }
    else
    {
        text = text + "Error: " + e.Message;
    }
    // ... only prints log, doesn't throw exception or stop loading ...
    Debug.Print(text, 0, Debug.DebugColor.Red, 17592186044416UL);
}
```

### Trigger Condition
XML doesn't comply with XSD validation rules

### Error/Impact
- Invalid XML still loaded
- Modders may not know their XML has problems

---

## Bug 8: ReadObjectReferenceFromXml() Incomplete Reference Format Check

**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectManager.cs`  
**Line**: ~1367-1383  
**Severity**: Medium

### What Happens
Object references must contain a "." delimiter, otherwise `MBInvalidReferenceException` is thrown.

### Root Cause
```csharp
public T ReadObjectReferenceFromXml<T>(string attributeName, XmlNode node) where T : MBObjectBase
{
    if (node.Attributes.get_ItemOf(attributeName) == null)
    {
        return default(T);
    }
    string value = node.Attributes.get_ItemOf(attributeName).Value;
    string text = value.Split(".".ToCharArray())[0];
    if (text == value)  // If there's no ".", text == value, throws exception
    {
        throw new MBInvalidReferenceException(value);
    }
    // ...
}
```

### Trigger Condition
Reference format error, e.g., `ref="SomeId"` instead of `ref="Type.SomeId"`

### Error/Impact
```
MBInvalidReferenceException: SomeId
```

### Example
```xml
<!-- Wrong: should be "Item.sword_001" -->
<EquipmentSlot id="primary" ref="sword_001" />

<!-- Correct -->
<EquipmentSlot id="primary" ref="Item.sword_001" />
```

---

## Bug 9: XmlResource.GetMbprojxmls() Attribute Access Without Null Check

**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/XmlResource.cs`  
**Line**: ~138-139  
**Severity**: High

### What Happens
When reading mbproj files, if `id` or `name` attributes don't exist, NullReferenceException is thrown.

### Root Cause
```csharp
foreach (object obj in xmlNodeList)
{
    XmlNode xmlNode = (XmlNode)obj;
    string innerText = xmlNode.Attributes.get_ItemOf("id").InnerText;  // May be null
    string innerText2 = xmlNode.Attributes.get_ItemOf("name").InnerText;  // May be null
    // ...
}
```

### Trigger Condition
`<file>` element in mbproj XML missing `id` or `name` attribute

### Error/Impact
Module loading fails, cannot get any XML content

---

## Bug 10: XmlResource.GetXmlListAndApply() Attribute Access Without Null Check

**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/XmlResource.cs`  
**Line**: ~173-174, 187  
**Severity**: High

### What Happens
Similar to Bug 9, missing null checks when reading XmlName and IncludedGameTypes nodes.

### Root Cause
```csharp
// Line 173-174
string innerText = xmlNode2.Attributes.get_ItemOf("id").InnerText;
string innerText2 = xmlNode2.Attributes.get_ItemOf("path").InnerText;

// Line 187
list.Add(xmlNode4.Attributes.get_ItemOf("value").InnerText);
```

### Trigger Condition
Module XML configuration missing required attributes

### Error/Impact
Module initialization fails

---

## Bug 11: CreateObjectFromXmlNode() and CreateObjectWithoutDeserialize() Also Missing id Check

**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectManager.cs`  
**Line**: ~1271, 1289  
**Severity**: Critical

### What Happens
Both methods directly access the `id` attribute without null checks.

### Root Cause
```csharp
// Line 1271 (CreateObjectFromXmlNode)
string value = node.Attributes.get_ItemOf("id").Value;

// Line 1289 (CreateObjectWithoutDeserialize)  
string value = node.Attributes.get_ItemOf("id").Value;
```

### Trigger Condition
Passed XmlNode missing id attribute

### Error/Impact
Program crash

---

## Summary

| Bug ID | Severity | Description |
|--------|----------|-------------|
| 1 | Critical | LoadXML() silently swallows all exceptions |
| 2 | Critical | MBObjectBase.Deserialize() id attribute null check missing |
| 3 | Critical | LoadXml() id attribute null check missing during node iteration |
| 4 | High | LoadOneXmlFromFile() silently swallows exceptions |
| 5 | High | LoadXMLFromFileSkipValidation() silently swallows exceptions |
| 6 | High | LoadXmlWithValidation() silently swallows exceptions |
| 7 | Medium | ValidationEventHandler only logs, doesn't stop loading |
| 8 | Medium | ReadObjectReferenceFromXml() reference format check incomplete |
| 9 | High | XmlResource.GetMbprojxmls() attribute access without null check |
| 10 | High | XmlResource.GetXmlListAndApply() attribute access without null check |
| 11 | Critical | CreateObjectFromXmlNode/WithoutDeserialize missing id check |

---

## Fix Recommendations

1. **All `get_ItemOf().Value/InnerText` calls must be null-checked first**
2. **Silent `catch (Exception)` blocks should at least log the exception**
3. **ValidationEventHandler should consider throwing exception to block invalid XML loading**
4. **Add more detailed error context** (file path, line number, node name, etc.)

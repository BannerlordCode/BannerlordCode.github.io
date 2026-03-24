# MBObjectManager / MBObjectManager

**Namespace**: TaleWorlds.ObjectSystem
**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectManager.cs`
**Purpose**: XML 加载和游戏对象注册管理的核心类 / Core class for XML loading and game object registration management

## 概述 / Overview

`MBObjectManager` 是游戏对象系统的核心，负责从 XML 文件加载数据、注册游戏对象、以及提供对象查询接口。它是一个单例类，通过 `MBObjectManager.Instance` 访问。

`MBObjectManager` is the core of the game object system, responsible for loading data from XML files, registering game objects, and providing object query interfaces. It is a singleton class accessed via `MBObjectManager.Instance`.

## 重要属性 / Important Properties

| Property | Type | Description |
|----------|------|-------------|
| Instance | `static MBObjectManager` | 单例实例 / Singleton instance |
| NumRegisteredTypes | `int` | 已注册类型数量 / Number of registered types |

## 重要方法 / Important Methods

### Init

```csharp
public static MBObjectManager Init()
```

初始化单例 / Initialize singleton

### LoadXML

```csharp
public void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)
```

加载指定 ID 的 XML / Load XML with given ID

### LoadXml

```csharp
public void LoadXml(XmlDocument doc, bool isDevelopment = false)
```

加载 XmlDocument / Load from XmlDocument

### RegisterType

```csharp
public void RegisterType(string classPrefix, string classListPrefix, uint typeId, bool autoCreateInstance = true, bool isTemporary = false)
```

注册对象类型 / Register object type

### RegisterObject

```csharp
public T RegisterObject(T obj)
```

注册对象实例 / Register object instance

### GetObject (by name)

```csharp
public T GetObject(string objectName)
```

通过名称获取对象 / Get object by name

### GetObject (by predicate)

```csharp
public T GetObject(Func<T, bool> predicate)
```

通过条件获取单个对象 / Get single object by predicate

### GetObjects

```csharp
public MBReadOnlyList<T> GetObjects(Func<T, bool> predicate)
```

通过条件获取对象列表 / Get object list by predicate

### GetObjectTypeList

```csharp
public MBReadOnlyList<T> GetObjectTypeList()
```

获取指定类型的所有对象 / Get all objects of a type

### CreateObject

```csharp
public T CreateObject(string stringId)
```

创建新对象 / Create new object

### ReadObjectReferenceFromXml

```csharp
public T ReadObjectReferenceFromXml(string attributeName, XmlNode node)
```

从 XML 读取对象引用 / Read object reference from XML

## 使用示例 / Usage Example

```csharp
// 获取 MBObjectManager 实例
// Get MBObjectManager instance
MBObjectManager objectManager = MBObjectManager.Instance;

// 注册新的对象类型
// Register new object type
objectManager.RegisterType<MyCustomObject>("MyCustomObject", "MyCustomObjects", 200, true, false);

// 获取已知 StringId 的对象
// Get object with known StringId
MyCustomObject obj = objectManager.GetObject<MyCustomObject>("my_custom_object_id");

// 使用条件查询对象
// Query objects with predicate
var items = objectManager.GetObjects<ItemObject>(
    item => item.Culture == CultureObject.Find("empire")
);

// 获取所有指定类型的对象
// Get all objects of a type
var allCharacters = objectManager.GetObjectTypeList<CharacterObject>();

// 创建新对象
// Create new object
MyCustomObject newObj = objectManager.CreateObject<MyCustomObject>("my_new_object");
newObj.SomeProperty = 123;
```

## XML 加载流程 / XML Loading Flow

The XML loading process follows these steps:

1. `LoadXML(id)` - 通过 ID 加载合并后的 XML / Load merged XML by ID
2. `LoadXml(doc)` - 解析 XML 文档 / Parse XML document
3. 遍历所有已注册类型，查找匹配的根元素 / Iterate through all registered types
4. 对每个子元素 / For each child element:
   a. 获取或创建 PresumedObject / Get or create PresumedObject
   b. 调用 `Deserialize()` 填充对象数据 / Call `Deserialize()` to populate object data
   c. 调用 `AfterInitialized()` / Call `AfterInitialized()`

## 注意事项 / Notes

- XML 加载时异常会被静默捕获，不会中断游戏
- XML loading exceptions are silently caught and do not interrupt the game
- 对象引用格式必须是 `TypeName.StringId`（如 `ItemObject.wooden_stick`）
- Object reference format must be `TypeName.StringId` (e.g., `ItemObject.wooden_stick`)
- 如果 XML 中缺少 `id` 属性，会导致崩溃
- Missing `id` attribute in XML will cause a crash
- 使用 `GetObject` 时类型名称会自动匹配
- Type name is automatically matched when using `GetObject`

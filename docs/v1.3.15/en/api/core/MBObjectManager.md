
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBObjectManager / MBObjectManager`
- [← Area / Back to core](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBObjectManager / MBObjectManager

## Mental Model

Treat `MBObjectManager` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace**: TaleWorlds.ObjectSystem
**File**: `bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectManager.cs`
**Purpose**: Core class for XML loading and game object registration management / XML 加载和游戏对象注册管理的核心类


<!-- BEGIN DEV-USE-CASES -->

## Developer Use Cases

### Use Case 1: Register a custom type and load from XML

**Scenario**: Your mod defines a new `MBObjectBase` subclass and wants it loaded from XML.

```csharp
// Inside a RegisterSubModuleObjects callback
objectManager.RegisterType<MyCustomObject>(
    "MyCustomObject", "MyCustomObjects", 1500, autoCreateInstance: true);
```

**Key points**: `classPrefix` and `classListPrefix` must match the XML root element names; `typeId` must be globally unique (use > 1000 to avoid official slots); `autoCreateInstance: true` makes the manager instantiate objects automatically.

### Use Case 2: Retrieve an object by StringId

**Scenario**: Look up a concrete object instance using the `id` string from XML.

```csharp
ItemObject sword = objectManager.GetObject<ItemObject>("northern_sword");
CultureObject empire = objectManager.GetObject<CultureObject>("empire");
```

**Key points**: Returns `null` if not found — always null-check. Generic `GetObject<T>` is preferred over the non-generic `GetObject(string, string)`.

### Use Case 3: Iterate all objects of a type

**Scenario**: Enumerate every registered instance of a type (e.g., all items, all cultures).

```csharp
foreach (ItemObject item in objectManager.GetObjectTypeList<ItemObject>())
{
    if (item.IsFood) { /* process food items */ }
}
```

**Key points**: `GetObjectTypeList<T>` returns all registered instances of type `T`. The list is the live registry — do not modify it during iteration.

### Use Case 4: Load XML at runtime

**Scenario**: Load an additional XML definition file after game start (e.g., dynamic content).

```csharp
objectManager.LoadXML("MyModItems", isDevelopment: false, gameType: null, skipXmlFilterForEditor: false);
```

**Key points**: The `id` must match the XML root `<MyModItems>` element. Objects are registered immediately; call `UnregisterNonReadyObjects()` afterward to clean up incomplete entries.

<!-- END DEV-USE-CASES -->


## Overview / 概述

`MBObjectManager` is the core of the game object system, responsible for loading data from XML files, registering game objects, and providing object query interfaces. It is a singleton class accessed via `MBObjectManager.Instance`.

`MBObjectManager` 是游戏对象系统的核心，负责从 XML 文件加载数据、注册游戏对象、以及提供对象查询接口。它是一个单例类，通过 `MBObjectManager.Instance` 访问。

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| Instance | `static MBObjectManager` | Singleton instance / 单例实例 |
| NumRegisteredTypes | `int` | Number of registered types / 已注册类型数量 |

## Important Methods / 重要方法

### Init

```csharp
public static MBObjectManager Init()
```

Initialize singleton / 初始化单例

### LoadXML

```csharp
public void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)
```

Load XML with given ID / 加载指定 ID 的 XML

### LoadXml

```csharp
public void LoadXml(XmlDocument doc, bool isDevelopment = false)
```

Load from XmlDocument / 加载 XmlDocument

### RegisterType

```csharp
public void RegisterType<T>(string classPrefix, string classListPrefix, uint typeId, bool autoCreateInstance = true, bool isTemporary = false)
```

Register object type / 注册对象类型

### RegisterObject

```csharp
public T RegisterObject<T>(T obj)
```

Register object instance / 注册对象实例

### GetObject (by name)

```csharp
public T GetObject<T>(string objectName)
```

Get object by name / 通过名称获取对象

### GetObject (by predicate)

```csharp
public T GetObject<T>(Func<T, bool> predicate)
```

Get single object by predicate / 通过条件获取单个对象

### GetObjects

```csharp
public MBReadOnlyList<T> GetObjects<T>(Func<T, bool> predicate)
```

Get object list by predicate / 通过条件获取对象列表

### GetObjectTypeList

```csharp
public MBReadOnlyList<T> GetObjectTypeList<T>()
```

Get all objects of a type / 获取指定类型的所有对象

### CreateObject

```csharp
public T CreateObject<T>(string stringId)
```

Create new object / 创建新对象

### ReadObjectReferenceFromXml

```csharp
public T ReadObjectReferenceFromXml<T>(string attributeName, XmlNode node)
```

Read object reference from XML / 从 XML 读取对象引用

## Usage Example / 使用示例

```csharp
// Get MBObjectManager instance
// 获取 MBObjectManager 实例
MBObjectManager objectManager = MBObjectManager.Instance;

// Register new object type
// 注册新的对象类型
objectManager.RegisterType<MyCustomObject>("MyCustomObject", "MyCustomObjects", 200, true, false);

// Get object with known StringId
// 获取已知 StringId 的对象
MyCustomObject obj = objectManager.GetObject<MyCustomObject>("my_custom_object_id");

// Query objects with predicate
// 使用条件查询对象
var items = objectManager.GetObjects<ItemObject>(
    item => item.Culture == CultureObject.Find("empire")
);

// Get all objects of a type
// 获取所有指定类型的对象
var allCharacters = objectManager.GetObjectTypeList<CharacterObject>();

// Create new object
// 创建新对象
MyCustomObject newObj = objectManager.CreateObject<MyCustomObject>("my_new_object");
newObj.SomeProperty = 123;
```

## XML Loading Flow / XML 加载流程

The XML loading process follows these steps:

1. `LoadXML(id)` - Load merged XML by ID
2. `LoadXml(doc)` - Parse XML document
3. Iterate through all registered types, find matching root elements
4. For each child element:
   a. Get or create PresumedObject
   b. Call `Deserialize()` to populate object data
   c. Call `AfterInitialized()`

## Notes / 注意事项

- XML loading exceptions are silently caught and do not interrupt the game
- XML 加载时异常会被静默捕获，不会中断游戏
- Object reference format must be `TypeName.StringId` (e.g., `ItemObject.wooden_stick`)
- 对象引用格式必须是 `TypeName.StringId`（如 `ItemObject.wooden_stick`）
- Missing `id` attribute in XML will cause a crash
- 如果 XML 中缺少 `id` 属性，会导致崩溃
- Type name is automatically matched when using `GetObject<T>(string objectName)`
- 使用 `GetObject<T>(string objectName)` 时类型名称会自动匹配

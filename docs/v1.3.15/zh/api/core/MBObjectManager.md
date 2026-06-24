<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBObjectManager / MBObjectManager`
- [← 本领域 / 返回 core](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBObjectManager / MBObjectManager

## 心智模型

先把 `MBObjectManager` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

**Namespace**: TaleWorlds.ObjectSystem
**File**: 

`bannerlord-1.3.15/TaleWorlds.ObjectSystem/MBObjectManager.cs

`
**Purpose**: XML 加载和游戏对象注册管理的核心?/ Core class for XML loading and game object registration management

## 概述 / Overview

`MBObjectManager

` 是游戏对象系统的核心，负责从 XML 文件加载数据、注册游戏对象、以及提供对象查询接口。它是一个单例类，通过 

`MBObjectManager.Instance

` 访问?

`MBObjectManager

` is the core of the game object system, responsible for loading data from XML files, registering game objects, and providing object query interfaces. It is a singleton class accessed via 

`MBObjectManager.Instance

`.

## 开发用?/ Developer Use Cases

### 用例 1: 注册自定义类型并?XML 加载

**场景**: 模组定义新的 

`MBObjectBase

` 子类，需要让它能?XML 读取?

`

`

`csharp
// ?RegisterSubModuleObjects 回调?
objectManager.RegisterType&lt;MyCustomObject&gt;(
    "MyCustomObject", "MyCustomObjects", 1500, autoCreateInstance: true);
`

`

`

**要点**: 

`classPrefix

` ?

`classListPrefix

` 必须?XML 根元素名一致；

`typeId

` 必须全局唯一（建?&gt; 1000 避开官方占位）；

`autoCreateInstance: true

` 让管理器自动 new 对象?

### 用例 2: 通过 StringId 取回对象

**场景**: ?XML 中的 

`id

` 字符串查询具体对象实例?

`

`

`csharp
ItemObject sword = objectManager.GetObject&lt;ItemObject&gt;("northern_sword");
CultureObject empire = objectManager.GetObject&lt;CultureObject&gt;("empire");
`

`

`

**要点**: 

`GetObject&lt;T&gt;(string)

` 找不到返?

`null

`，调用前应判空；泛型 

`T

` 必须是已注册类型；避免在热路径上重复查询，建议缓存引用?

### 用例 3: 用谓词批量查询对?

**场景**: 筛选满足条件的对象集合（如某文化下的所有物品）?

`

`

`csharp
MBReadOnlyList&lt;ItemObject&gt; empireItems = objectManager.GetObjects&lt;ItemObject&gt;(
    item =&gt; item.Culture != null && item.Culture.StringId == "empire");
// 取全?
MBReadOnlyList&lt;CharacterObject&gt; allChars = objectManager.GetObjectTypeList&lt;CharacterObject&gt;();
`

`

`

**要点**: 

`GetObjects

` 返回新分配的只读列表，避免每帧调用；只取一次的批量查询?

`GetObjectTypeList

`（更高效，直接返回内部列表的只读视图）?

### 用例 4: 创建运行时对象并注册

**场景**: 程序化生成新对象（如动态物品、临时角色）?

`

`

`csharp
MyCustomObject newObj = objectManager.CreateObject&lt;MyCustomObject&gt;("dynamic_obj_1");
newObj.SomeProperty = 42;
// 已自动注册到管理器，可被 GetObject 查询?
`

`

`

**要点**: 

`CreateObject

` 自动分配 

`StringId

` 并完成注册；?

`stringId

` 已存在会抛异常；运行时创建的对象不会自动进存档，需配合 

`SaveManager

` 自行处理?

## 重要属?/ Important Properties

\| Property \| Type \| Description \|
\|----------\|------\|-------------\|
\| Instance \| 

`static MBObjectManager

` \| 单例实例 / Singleton instance \|
\| NumRegisteredTypes \| 

`int

` \| 已注册类型数?/ Number of registered types \|

## 重要方法 / Important Methods

### Init

`

`

`csharp
public static MBObjectManager Init()
`

`

`

初始化单?/ Initialize singleton

### LoadXML

`

`

`csharp
public void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)
`

`

`

加载指定 ID ?XML / Load XML with given ID

### LoadXml

`

`

`csharp
public void LoadXml(XmlDocument doc, bool isDevelopment = false)
`

`

`

加载 XmlDocument / Load from XmlDocument

### RegisterType

`

`

`csharp
public void RegisterType(string classPrefix, string classListPrefix, uint typeId, bool autoCreateInstance = true, bool isTemporary = false)
`

`

`

注册对象类型 / Register object type

### RegisterObject

`

`

`csharp
public T RegisterObject(T obj)
`

`

`

注册对象实例 / Register object instance

### GetObject (by name)

`

`

`csharp
public T GetObject(string objectName)
`

`

`

通过名称获取对象 / Get object by name

### GetObject (by predicate)

`

`

`csharp
public T GetObject(Func&lt;T, bool&gt; predicate)
`

`

`

通过条件获取单个对象 / Get single object by predicate

### GetObjects

`

`

`csharp
public MBReadOnlyList&lt;T&gt; GetObjects(Func&lt;T, bool&gt; predicate)
`

`

`

通过条件获取对象列表 / Get object list by predicate

### GetObjectTypeList

`

`

`csharp
public MBReadOnlyList&lt;T&gt; GetObjectTypeList()
`

`

`

获取指定类型的所有对?/ Get all objects of a type

### CreateObject

`

`

`csharp
public T CreateObject(string stringId)
`

`

`

创建新对?/ Create new object

### ReadObjectReferenceFromXml

`

`

`csharp
public T ReadObjectReferenceFromXml(string attributeName, XmlNode node)
`

`

`

?XML 读取对象引用 / Read object reference from XML

## 使用示例 / Usage Example

`

`

`csharp
// 获取 MBObjectManager 实例
// Get MBObjectManager instance
MBObjectManager objectManager = MBObjectManager.Instance;

// 注册新的对象类型
// Register new object type
objectManager.RegisterType&lt;MyCustomObject&gt;("MyCustomObject", "MyCustomObjects", 200, true, false);

// 获取已知 StringId 的对?
// Get object with known StringId
MyCustomObject obj = objectManager.GetObject&lt;MyCustomObject&gt;("my_custom_object_id");

// 使用条件查询对象
// Query objects with predicate
var items = objectManager.GetObjects&lt;ItemObject&gt;(
    item =&gt; item.Culture == CultureObject.Find("empire")
);

// 获取所有指定类型的对象
// Get all objects of a type
var allCharacters = objectManager.GetObjectTypeList&lt;CharacterObject&gt;();

// 创建新对?
// Create new object
MyCustomObject newObj = objectManager.CreateObject&lt;MyCustomObject&gt;("my_new_object");
newObj.SomeProperty = 123;
`

`

`

## XML 加载流程 / XML Loading Flow

The XML loading process follows these steps:

1. 

`LoadXML(id)

` - 通过 ID 加载合并后的 XML / Load merged XML by ID
2. 

`LoadXml(doc)

` - 解析 XML 文档 / Parse XML document
3. 遍历所有已注册类型，查找匹配的根元?/ Iterate through all registered types
4. 对每个子元素 / For each child element:
   a. 获取或创?PresumedObject / Get or create PresumedObject
   b. 调用 

`Deserialize()

` 填充对象数据 / Call 

`Deserialize()

` to populate object data
   c. 调用 

`AfterInitialized()

` / Call 

`AfterInitialized()

`

## 注意事项 / Notes

- XML 加载时异常会被静默捕获，不会中断游戏
- XML loading exceptions are silently caught and do not interrupt the game
- 对象引用格式必须?

`TypeName.StringId

`（如 

`ItemObject.wooden_stick

`?
- Object reference format must be 

`TypeName.StringId

` (e.g., 

`ItemObject.wooden_stick

`)
- 如果 XML 中缺?

`id

` 属性，会导致崩?
- Missing 

`id

` attribute in XML will cause a crash
- 使用 

`GetObject

` 时类型名称会自动匹配
- Type name is automatically matched when using 

`GetObject

`

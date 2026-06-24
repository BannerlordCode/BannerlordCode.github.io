<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LoadContext`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadContext

**命名空间:** TaleWorlds.SaveSystem.Load  
**模块:** TaleWorlds.SaveSystem  
**类型:** class

存档加载上下文。负责从存档数据中反序列化对象头、对象数据、容器数据和字符串，重建对象图并解析对象引用，是存档加载系统的核心协调器?
## 概述

`LoadContext

` 在存档加载时协调多阶段反序列化流程。`Load

` 方法按序执行?) 反序列化头部数据（对象头、容器头），并行创建所有对象头数据?) 创建对象实例（Id=0 为根对象）；3) 加载字符串表?) 解析对象引用（区分简单解析和高级解析）；5) 并行加载对象数据?) 并行加载容器数据?) 若非延迟初始化，执行 

`LoadCallbackInitializator

` 的初始化和后初始化回调。`GetObjectWithId

`/

`GetContainerWithId

`/

`GetStringWithId

` ?ID 查找已加载的对象、容器和字符串。`TryConvertType

` 处理数值类型间的转换（int/float 互转、数值转字符串）?
## 
## 心智模型

先把 `LoadContext` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
属?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| RootObject \| object \| 根对象（Id=0 的对象） \|
\| DefinitionContext \| DefinitionContext \| 类型定义上下?\|
\| Driver \| ISaveDriver \| 存档驱动?\|
\| EnableLoadStatistics \| bool \| 是否启用加载统计（静态，始终 false?\|

## 方法

### 构造函?
`

`

`csharp
public LoadContext(DefinitionContext definitionContext, ISaveDriver driver)
`

`

`

初始化定义上下文和存档驱动器?
### Load

`

`

`csharp
public bool Load(LoadData loadData, bool loadAsLateInitialize)
`

`

`

执行完整加载流程。返回是否成功?
**加载阶段（按序）?*
1. **加载头部** ?反序列化对象头和容器头，并行创建（`TWParallel.ForWithoutRenderThread

`，批大小 16?2. **创建对象** ?实例化所有对象，Id=0 设为根对?3. **加载字符?* ?反序列化字符串表
4. **解析对象** ?简单解析直?

`ResolveObject

`，高级解析从对象数据反序列化?

`AdvancedResolveObject

`
5. **加载对象数据** ?并行反序列化每个对象的数?6. **加载容器数据** ?并行反序列化每个容器的数?7. **初始化回?* ??

`loadAsLateInitialize

` ?false，创?

`LoadCallbackInitializator

` 执行 

`InitializeObjects

` ?

`AfterInitializeObjects

`

每阶段后执行 

`GC.Collect()

`。异常时打印错误信息并返?false?
### CreateLoadData

`

`

`csharp
internal static ObjectLoadData CreateLoadData(LoadData loadData, int i, ObjectHeaderLoadData header)
`

`

`

从存档数据创建单个对象的加载数据。反序列化对象数据存档，初始化读取器，填充创建的对象?
### CreateLoadCallbackInitializator

`

`

`csharp
internal LoadCallbackInitializator CreateLoadCallbackInitializator(LoadData loadData)
`

`

`

创建加载回调初始化器，包含所有对象头数据和对象数量?
### ID 查找方法

#### GetObjectWithId

`

`

`csharp
public ObjectHeaderLoadData GetObjectWithId(int id)
`

`

`

?ID 获取对象头加载数据。Id=-1 返回 null?
#### GetContainerWithId

`

`

`csharp
public ContainerHeaderLoadData GetContainerWithId(int id)
`

`

`

?ID 获取容器头加载数据。Id=-1 返回 null?
#### GetStringWithId

`

`

`csharp
public string GetStringWithId(int id)
`

`

`

?ID 获取字符串。Id=-1 返回 null?
### TryConvertType

`

`

`csharp
public static bool TryConvertType(Type sourceType, Type targetType, ref object data)
`

`

`

尝试类型转换。支持数值间互转（int/float 各子类型）、数值转字符串（int→Int64.ToString，float→Double.ToString InvariantCulture）。转换成功返?true 并修?

`data

`?
### LoadString

`

`

`csharp
private static string LoadString(ArchiveDeserializer saveArchive, int id)
`

`

`

从存档存档反序列化器中读取指?ID 的字符串?
## 使用示例

`

`

`csharp
// ?SaveManager 调用，不直接实例?// 典型流程?var definitionContext = new DefinitionContext(saveDefiniton);
var loadContext = new LoadContext(definitionContext, saveDriver);
LoadData loadData = new LoadData(driver);
loadData.Load();

bool success = loadContext.Load(loadData, loadAsLateInitialize: false);
if (success)
{
    object rootObject = loadContext.RootObject;
    // 使用反序列化的对象图
}

// 类型转换辅助
object data = 42;
LoadContext.TryConvertType(typeof(int), typeof(string), ref data);
// data = "42"
`

`

`

## 参见

- [save-system 类目录](../catalog-save.md)

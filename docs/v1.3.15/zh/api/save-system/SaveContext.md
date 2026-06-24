<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveContext`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveContext

**命名空间:** TaleWorlds.SaveSystem.Save
**模块:** TaleWorlds.SaveSystem
**类型:** class（实?

`ISaveContext

`?
## 概述

`SaveContext

` 是存档系统的**写入侧上下文**。`SaveManager.Save

` 内部创建一?

`SaveContext

`，由它遍历对象图、收集所有需要序列化的对?容器/字符串，并产出最终的 

`GameData

`（存档数据）?
本类是存档写入的性能关键路径——使?

`TWParallel.ForWithoutRenderThread

` 并行处理对象和容器的序列化，初始容量?131072 的索引表支持高效去重?
模组开发者通常不直接使用本类——只需给字段标?

`[SaveableField]

`、给属性标?

`[SaveableProperty]

`，`SaveManager

` / 

`SaveContext

` 会自动处理序列化。直接操作此类型属于高级用法?
## 心智模型

?

`SaveContext

` 理解?对象图序列化?。核心工作流?
1. **构?*：`new SaveContext(definitionContext)

`，初始化容量 131072 的对?容器/字符串索引表?2. **收集（`CollectObjects

`?*：从 

`RootObject

` 出发，BFS 遍历整个对象图。每个对象根据是否为容器（`IsContainer

`）分流到 

`_childObjects

` ?

`_childContainers

`，同时建?

`object→id

` 映射去重?3. **收集存档数据（`CollectSaveDatas

`?*：并行遍?

`_childObjects

` ?

`_childContainers

`，为每个对象生成 

`ObjectSaveData

` / 

`ContainerSaveData

`（提取字段、属性、字符串引用）?4. **序列化（

`WriteObjects

`/

`WriteContainers

`?*：并行将每个对象的存档数据写?

`byte[]

`?5. **汇总（

`WriteHeaders

`/

`WriteAllStrings

`?*：写入头部信息（对象/容器/字符串数量）和所有去重字符串?6. **产出**：组装为 

`GameData

` 对象?
关键索引表：
- 

`_childObjects

` / 

`_idsOfChildObjects

`：所有可序列化对象及 

`object→int

` 映射?- 

`_childContainers

` / 

`_idsOfChildContainers

`：所有容器（List/Dictionary 等）及映射?- 

`_strings

` / 

`_idsOfStrings

`：字符串去重表（线程安全，使?

`_locker

` 锁）?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`RootObject

` \| 

`object

` \| \| 本次存档的根对象（通常是游戏状态） \|
\| 

`SaveData

` \| 

`GameData

` \| \| 序列化完成后的存档数?\|
\| 

`DefinitionContext

` \| 

`DefinitionContext

` \| \| 类型/字段定义上下?\|

## 主要静态成?
\| 成员 \| 签名 \| 说明 \|
\|------\|------\|------\|
\| 

`GetStatistics

` \| 

`static SaveStatistics GetStatistics()

` \| 返回类型/容器的统计信息（仅在 

`EnableSaveStatistics

` ?true 时有意义?\|
\| 

`EnableSaveStatistics

` \| 

`static bool

` \| 是否启用存档统计（发布版恒为 

`false

`?\|

## 主要方法

### Save
`

`

`csharp
public bool Save(object target, MetaData metaData, out string errorMessage)
`

`

`
核心入口。设?

`RootObject = target

`，依次执行：

`CollectObjects

` ?

`CollectSaveDatas

` ?

`WriteObjects

` ?

`WriteContainers

` ?

`WriteHeaders

` ?

`WriteAllStrings

` ?组装 

`GameData

`。成功返?

`true

`，异常时设置 

`errorMessage

` 并返?

`false

`?
### AddOrGetStringId
`

`

`csharp
public int AddOrGetStringId(string text)
`

`

`
获取字符串的 ID，若不存在则新增。线程安全（使用 

`_locker

` 锁）。`null

` 返回 -1?
### GetObjectId
`

`

`csharp
public int GetObjectId(object target)
`

`

`
获取对象?ID（从 

`_idsOfChildObjects

` 查找）。未找到时打印错误日志?
### GetContainerId
`

`

`csharp
public int GetContainerId(object target)
`

`

`
获取容器?ID（从 

`_idsOfChildContainers

` 查找）?
### GetStringId
`

`

`csharp
public int GetStringId(string target)
`

`

`
获取字符串的 ID（不新增）。`null

` 返回 -1。线程安全?
### CollectObjects（私有）
`

`

`csharp
private void CollectObjects()
`

`

`
BFS 遍历对象图。从 

`RootObject

` 入队，逐个出队：若是容??

`CollectContainerObjects

`，否??

`CollectObjects(object)

`。每个对象提取子对象引用并入队，直到队列空?
### CollectSaveDatas（私有）
`

`

`csharp
private SaveDataSizeRecord CollectSaveDatas()
`

`

`
并行收集所有对象和容器的存档数据。使?

`TWParallel.ForWithoutRenderThread

`?6 线程）并行处理。返?

`SaveDataSizeRecord

`（头?字符?对象/容器总大小）?
### WriteObjects（私有）
`

`

`csharp
private byte[][] WriteObjects()
`

`

`
并行将所有对象的存档数据写入 

`byte[]

` 数组。每个对象调?

`SaveSingleObject

`?
### WriteContainers（私有）
`

`

`csharp
private byte[][] WriteContainers()
`

`

`
并行将所有容器的存档数据写入 

`byte[]

` 数组。每个容器调?

`SaveSingleContainer

`?
### WriteHeaders（私有静态）
`

`

`csharp
private static byte[] WriteHeaders(ObjectSaveData[] objects, ContainerSaveData[] containers,
    int headerSize, int stringCount)
`

`

`
写入头部信息：对?容器数量、每个对象的 header folder/data、配置入口（对象?字符串数/容器数）?
### WriteAllStrings（私有静态）
`

`

`csharp
private static byte[] WriteAllStrings(List&lt;string&gt; strings, int stringSize)
`

`

`
写入所有去重字符串。每个字符串写入 ID、长度、UTF8 编码内容?
## 使用示例

### 示例: 标准存档流程（框架内部）

`

`

`csharp
// SaveManager.Save 内部的大致流?SaveManager.InitializeGlobalDefinitionContext();
var defCtx = SaveManager.GetGlobalDefinitionContext();
var ctx = new SaveContext(defCtx);

if (ctx.Save(gameStateRoot, metaData, out string error))
{
    GameData data = ctx.SaveData;
    // ?data 写入文件...
}
else
{
    Debug.Print("Save failed: " + error);
}
`

`

`

### 示例: ?mod 开发?
::: tip 模组开发者的存档指南
绝大多数情况下你**不需要直接使?

`SaveContext

`**?
1. 给需要存档的字段标注 

`[SaveableField(fieldId)]

`
2. 给需要存档的属性标?

`[SaveableProperty(propertyId)]

`
3. 确保 

`CampaignBehaviorBase.SyncData

` 中用 

`dataStore.SyncData(name, ref field)

` 同步自定义数?4. 

`SaveManager

` / 

`SaveContext

` 会自动处理对象图遍历和序列化

直接操作 

`SaveContext

` 属于高级用法，可能破坏存档兼容性?:::

## 参见

- [SaveManager](./SaveManager.md)
- [LoadContext](./LoadContext.md)
- [SaveAttributes](./SaveAttributes.md)
- [完整类目录](../catalog)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)

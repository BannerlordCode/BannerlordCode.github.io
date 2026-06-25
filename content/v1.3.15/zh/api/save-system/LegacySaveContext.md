---
title: LegacySaveContext
description: LegacySaveContext - 旧版存档序列化上下文，BFS 收集对象图并并行序列化为二进?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LegacySaveContext`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LegacySaveContext

**命名空间:** TaleWorlds.SaveSystem.Save
**模块:** TaleWorlds.SaveSystem
**类型:** class（实?

`ISaveContext

`?**领域:** 存档系统 / 序列?
## 概述

`LegacySaveContext

` ?Bannerlord 旧版存档序列化的核心上下文。它负责把一个对象图（通常?

`Campaign

` 根对象）完整序列化为 

`GameData

` 二进制结构。流程：1) 

`CollectObjects

` 从根对象出发做广度优先遍历（BFS），把所有可达对象收集到 

`_childObjects

`、所有容器（List/Dict/Array 等）收集?

`_childContainers

`、所有字符串去重收集?

`_strings

`?) 并行序列化所有对象与容器为独立字节数组；3) 把字符串表、对象头、容器头分别写入 

`SaveEntryFolder

` 树；4) 最终打包成 

`GameData

`（header 字节 + archive 字节 + 对象字节数组 + 容器字节数组）?
设计要点?) **预分配大容量**——构造时所?List/Dict 初始容量 131072，避免存档时反复扩容?) **并行序列?*——`TWParallel.ForWithoutRenderThread

` 并行处理所有对?容器，批大小 16?) **字符串去?*——全存档共享一个字符串表，每个对象/容器只存字符?ID，大幅减小体积；4) **统计可?*——`EnableSaveStatistics

`（编译期常量 false）开启后按类型统计对象数/字段?字节数，用于诊断存档体积?) **线程安全**——`AddStrings

`/

`AddOrGetStringId

`/

`GetStringId

` ?

`_locker

` 加锁，因为并行序列化时多个对象可能同时注册字符串?
## 心智模型

?

`LegacySaveContext

` 看作"对象图→字节流的并行打包?。`Save(target, metaData, out errorMessage)

` 是入口：

1. 

`RootObject = target

`，初始化统计（若开启）?2. 

`CollectObjects()

` BFS 遍历：从 

`RootObject

` 入队，每次出队一个对象，判断是否容器（`IsContainer

`）——是?

`CollectContainerObjects

`（注册到 

`_childContainers

`，用 

`ContainerSaveData.GetChildObjects

` 取子元素入队），否则 

`CollectObjects

`（注册到 

`_childObjects

`，用 

`ObjectSaveData.GetChildObjects

` 取子元素入队）。每个对?容器只处理一次（?

`_idsOfChildObjects

`/

`_idsOfChildContainers

` 去重）?3. 并行序列化对象：

`TWParallel.ForWithoutRenderThread(0, _childObjects.Count, SaveSingleObject, 16)

`。每个对象创?

`ObjectSaveData

`，收?structs/members/strings，写 header ?

`ArchiveConcurrentSerializer

`（线程安全），写 body 到独?

`ArchiveSerializer

`，最?

`objectData[id] = body bytes

`?4. 并行序列化容器：同理 

`SaveSingleContainer

`?5. 写配置入口：对象?字符串数/容器数写?

`EntryId(-1, Config)

`?6. 写字符串表：逐个 

`SaveStringTo

` 写入 

`Strings

` 文件夹?7. 

`headerSerializer.FinalizeAndGetBinaryDataConcurrent()

` 得到 header 字节，`archiveSerializer.FinalizeAndGetBinaryData()

` 得到 archive 字节?8. 

`SaveData = new GameData(header, archive, objectData, containerData)

`?
`SaveStatistics

` 是诊?struct，提?

`GetObjectCounts(typeName)

` 返回 

`(count, fieldCount, propertyCount, totalBytes)

`，`GetContainerCounts

` 返回 

`(count, elementCount, elementFieldCount, elementPropertyCount, totalBytes)

`?
## 主要属?
\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`RootObject

` \| 

`object

` \| 存档根对象（通常?

`Campaign

`）。`Save

` 入口设置?\|
\| 

`SaveData

` \| 

`GameData

` \| 序列化产物。`Save

` 成功后填充?\|
\| 

`DefinitionContext

` \| 

`DefinitionContext

` \| 类型定义上下文，提供 

`GetClassDefinition

`/

`GetContainerDefinition

`，用于查类型元信息。构造时传入?\|
\| 

`EnableSaveStatistics

` \| 

`bool

` \| 是否启用存档统计。编译期常量 

`false

`（当前版本关闭）?\|

## 主要方法

### LegacySaveContext (constructor)
`

`

`csharp
public LegacySaveContext(DefinitionContext definitionContext)
`

`

`
初始化。所?List/Dict 预分?131072 容量（`_temporaryCollectedObjects

` 4096），创建 

`_locker

`?
### Save
`

`

`csharp
public bool Save(object target, MetaData metaData, out string errorMessage)
`

`

`
序列化入口。设?

`RootObject

`，BFS 收集，并行序列化对象/容器，打包字符串表与头，产出 

`SaveData

`。成功返?true，异常时 

`errorMessage

` 填异常信息返?false?
### CollectObjects
`

`

`csharp
private void CollectObjects()
`

`

`
BFS 收集。从 

`RootObject

` 入队，出队后按是否容器分流到 

`CollectContainerObjects

` ?

`CollectObjects(object)

`，子元素入队继续遍历，直到队列空?
### CollectContainerObjects / CollectObjects(object)
`

`

`csharp
private void CollectContainerObjects(ContainerType containerType, object parent)
private void CollectObjects(object parent)
`

`

`
注册单个容器/对象到对应列表与字典（去重），用 

`ContainerSaveData.GetChildObjects

`/

`ObjectSaveData.GetChildObjects

` 取子元素放入 

`_temporaryCollectedObjects

`，再入队。`CollectContainerObjects

` 找不到容器定义时 

`Debug.FailedAssert

`；`CollectObjects(object)

` 找不到类型定义时抛异常?
### SaveSingleObject
`

`

`csharp
private void SaveSingleObject(ArchiveConcurrentSerializer headerSerializer, byte[][] objectData, int id)
`

`

`
序列化单个对象。创?

`ObjectSaveData

`，收?structs/members/strings，写 header（线程安全）?body（独立），`objectData[id] = body bytes

`。若开启统计则累加?

`_typeStatistics

`?
### SaveSingleContainer
`

`

`csharp
private void SaveSingleContainer(ArchiveConcurrentSerializer headerSerializer, byte[][] containerData, int id)
`

`

`
序列化单个容器。类?

`SaveSingleObject

`，用 

`ContainerSaveData

`。统计累加到 

`_containerStatistics

`，元素数累加 

`GetElementCount()

`?
### AddStrings
`

`

`csharp
public void AddStrings(List&lt;string&gt; texts)
`

`

`
批量注册字符串。加锁，逐个去重添加?

`_strings

`/

`_idsOfStrings

`。并行序列化时多个对象调用此方法注册各自字符串?
### AddOrGetStringId
`

`

`csharp
public int AddOrGetStringId(string text)
`

`

`
获取字符?ID，不存在则注册。null 返回 -1。加锁。并行序列化时由 

`ObjectSaveData

`/

`ContainerSaveData

` 调用?
### GetObjectId / GetContainerId / GetStringId
`

`

`csharp
public int GetObjectId(object target)
public int GetContainerId(object target)
public int GetStringId(string target)
`

`

`
查对?容器/字符串的 ID。`GetObjectId

` 找不到时 

`Debug.FailedAssert

`（存档错误）；`GetStringId

` null 返回 -1，加锁?
### GetStatistics
`

`

`csharp
public static LegacySaveContext.SaveStatistics GetStatistics()
`

`

`
返回当前存档统计快照。仅?

`EnableSaveStatistics

` ?true 时有意义?
### GetContainerName
`

`

`csharp
private string GetContainerName(Type t)
`

`

`
生成容器类型的统计名。递归拼接泛型参数（如 

`List&lt;Hero&gt;

` ?

`List

`Hero

`

`），用于统计字典 key?
## 使用示例

### 示例: 手动序列化自定义对象图并诊断体积

**场景**: Mod 想用自己的存档格式保存大量数据，需要理?

`LegacySaveContext

` 的并行序列化流程并诊断哪些类型占体积?
`

`

`csharp
public bool SaveModData(MyModRoot root, string path)
{
    // 1. 构建 DefinitionContext（需注册所有要序列化的类型?    var defContext = new DefinitionContext();
    defContext.RegisterType(typeof(MyModRoot));
    defContext.RegisterType(typeof(MyModChild));
    // ... 注册所有可达类?
    // 2. 序列?    var saveContext = new LegacySaveContext(defContext);
    if (!saveContext.Save(root, null, out string error))
    {
        ModLog.Error($"存档失败: {error}");
        return false;
    }

    // 3. 写入文件
    GameData data = saveContext.SaveData;
    using (var fs = File.Create(path))
    using (var bw = new BinaryWriter(fs))
    {
        bw.Write(data.HeaderData.Length);  bw.Write(data.HeaderData);
        bw.Write(data.ArchiveData.Length); bw.Write(data.ArchiveData);
        bw.Write(data.ObjectData.Length);
        foreach (var objBytes in data.ObjectData) { bw.Write(objBytes.Length); bw.Write(objBytes); }
        bw.Write(data.ContainerData.Length);
        foreach (var cBytes in data.ContainerData) { bw.Write(cBytes.Length); bw.Write(cBytes); }
    }
    return true;
}

// 诊断体积（需开?EnableSaveStatistics，当前版本需改源码常量）
public void DiagnoseSaveSize()
{
    var stats = LegacySaveContext.GetStatistics();
    foreach (var typeKey in stats.GetTypeKeys())
    {
        var (count, fieldCount, propCount, bytes) = stats.GetObjectCounts(typeKey);
        ModLog.Info($"{typeKey}: {count} 个对? {bytes} 字节, {fieldCount} 字段 {propCount} 属?);
    }
    foreach (var containerKey in stats.GetContainerKeys())
    {
        var (count, elemCount, _, _, bytes) = stats.GetContainerCounts(containerKey);
        ModLog.Info($"{containerKey}: {count} 个容? {elemCount} 元素, {bytes} 字节");
    }
}
`

`

`

**要点**: 

`DefinitionContext

` 必须注册所有可达类型，否则 

`CollectObjects

` ?"Could not find type definition"；字符串注册是线程安全的（`_locker

`），?

`GetObjectId

` 找不到对象说?BFS 漏了引用；并行序列化?

`TWParallel.ForWithoutRenderThread

` 批大?16，不要在 

`SaveSingleObject

` 内访问共享可变状态；

`EnableSaveStatistics

` 当前是编译期 false，诊断需改源码重编?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)

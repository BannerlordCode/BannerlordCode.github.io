<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ContainerHeaderLoadData`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ContainerHeaderLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ContainerHeaderLoadData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Load/ContainerHeaderLoadData.cs`

## 概述

`ContainerHeaderLoadData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ContainerHeaderLoadData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Target` | `public object Target { get; }` |
| `Context` | `public LoadContext Context { get; }` |
| `TypeDefinition` | `public ContainerDefinition TypeDefinition { get; }` |
| `SaveId` | `public SaveId SaveId { get; }` |
| `ElementCount` | `public int ElementCount { get; }` |
| `ContainerType` | `public ContainerType ContainerType { get; }` |

## 主要方法

### GetObjectTypeDefinition
`public bool GetObjectTypeDefinition()`

**用途 / Purpose:** 获取 `object type definition` 的当前值。

### CreateObject
`public void CreateObject()`

**用途 / Purpose:** 创建一个 `object` 实例或对象。

### InitialieReaders
`public void InitialieReaders(SaveEntryFolder saveEntryFolder)`

**用途 / Purpose:** 初始化 `ialie readers` 的状态、资源或绑定。

## 使用示例

```csharp
var value = new ContainerHeaderLoadData();
```

## 参见

- [完整类目录](../catalog)
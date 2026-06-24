<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveEntry`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveEntry

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** `public class SaveEntry`
**领域:** save-system

## 概述

`SaveEntry` 位于 `TaleWorlds.SaveSystem`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Data` | `public byte Data { get; }` |
| `Id` | `public EntryId Id { get; }` |
| `FolderId` | `public int FolderId { get; }` |

## 主要方法

### CreateFrom
`public static SaveEntry CreateFrom(int entryFolderId, EntryId entryId, byte data)`

**用途 / Purpose:** 创建一个 `from` 实例或对象。

### CreateNew
`public static SaveEntry CreateNew(SaveEntryFolder parentFolder, EntryId entryId)`

**用途 / Purpose:** 创建一个 `new` 实例或对象。

### GetBinaryReader
`public BinaryReader GetBinaryReader()`

**用途 / Purpose:** 获取 `binary reader` 的当前值。

### FillFrom
`public void FillFrom(BinaryWriter writer)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
SaveEntry.CreateFrom(0, entryId, 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)

<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TauntSlotData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntSlotData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntSlotData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotData.cs`

## 概述

`TauntSlotData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `TauntSlotData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public string PlayerId { get; set; }` |
| `TauntIndices` | `public List<TauntIndexData> TauntIndices { get; set; }` |

## 主要方法

### HasSameContentWith
`public override bool HasSameContentWith(MultiplayerLocalData other)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `same content with`。

## 使用示例

```csharp
var value = new TauntSlotData();
```

## 参见

- [完整类目录](../catalog)
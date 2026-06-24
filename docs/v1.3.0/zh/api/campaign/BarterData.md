<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarterData`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BarterData

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterData`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/BarterSystem/BarterData.cs`

## 概述

`BarterData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `BarterData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `OffererMapFaction` | `public IFaction OffererMapFaction { get; }` |
| `OtherMapFaction` | `public IFaction OtherMapFaction { get; }` |
| `IsAiBarter` | `public bool IsAiBarter { get; }` |

## 主要方法

### AddBarterGroup
`public void AddBarterGroup(BarterGroup barterGroup)`

**用途 / Purpose:** 向当前集合/状态中添加 `barter group`。

### GetBarterGroups
`public List<BarterGroup> GetBarterGroups()`

**用途 / Purpose:** 获取 `barter groups` 的当前值。

### GetBarterables
`public List<Barterable> GetBarterables()`

**用途 / Purpose:** 获取 `barterables` 的当前值。

### GetOfferedBarterables
`public List<Barterable> GetOfferedBarterables()`

**用途 / Purpose:** 获取 `offered barterables` 的当前值。

## 使用示例

```csharp
var value = new BarterData();
```

## 参见

- [完整类目录](../catalog)
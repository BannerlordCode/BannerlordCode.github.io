<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyMarkerItemComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyMarkerItemComparer

**命名空间:** SandBox.ViewModelCollection.Nameplate
**模块:** SandBox.ViewModelCollection
**类型:** `public class PartyMarkerItemComparer : IComparer<SettlementNameplatePartyMarkerItemVM>`
**Base:** `IComparer<SettlementNameplatePartyMarkerItemVM>`
**领域:** campaign-ext

## 概述

`PartyMarkerItemComparer` 位于 `SandBox.ViewModelCollection.Nameplate`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartiesInSettlement` | `public MBBindingList<SettlementNameplatePartyMarkerItemVM> PartiesInSettlement { get; set; }` |

## 主要方法

### Compare
`public int Compare(SettlementNameplatePartyMarkerItemVM x, SettlementNameplatePartyMarkerItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RegisterEvents
`public void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### UnloadEvents
`public void UnloadEvents()`

**用途 / Purpose:** 处理 `unload events` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 PartyMarkerItemComparer 实例，再调用它的公开方法
var value = new PartyMarkerItemComparer();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)

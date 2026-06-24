<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NameplateDistanceComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NameplateDistanceComparer

**命名空间:** SandBox.ViewModelCollection.Nameplate
**模块:** SandBox.ViewModelCollection
**类型:** `public class NameplateDistanceComparer : IComparer<PartyNameplateVM>`
**Base:** `IComparer<PartyNameplateVM>`
**领域:** campaign-ext

## 概述

`NameplateDistanceComparer` 位于 `SandBox.ViewModelCollection.Nameplate`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Nameplates` | `public MBBindingList<PartyNameplateVM> Nameplates { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Update
`public void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Compare
`public int Compare(PartyNameplateVM x, PartyNameplateVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 NameplateDistanceComparer 实例，再调用它的公开方法
var value = new NameplateDistanceComparer();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)

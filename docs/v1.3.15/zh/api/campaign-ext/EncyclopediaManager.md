<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaManager

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs`

## 概述

`EncyclopediaManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `EncyclopediaManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ViewDataTracker` | `public IViewDataTracker ViewDataTracker { get; }` |

## 主要方法

### CreateEncyclopediaPages
`public void CreateEncyclopediaPages()`

**用途 / Purpose:** 创建一个 `encyclopedia pages` 实例或对象。

### GetEncyclopediaPages
`public IEnumerable<EncyclopediaPage> GetEncyclopediaPages()`

**用途 / Purpose:** 获取 `encyclopedia pages` 的当前值。

### GetPageOf
`public EncyclopediaPage GetPageOf(Type type)`

**用途 / Purpose:** 获取 `page of` 的当前值。

### GetIdentifier
`public string GetIdentifier(Type type)`

**用途 / Purpose:** 获取 `identifier` 的当前值。

### GoToLink
`public void GoToLink(string pageType, string stringID)`

**用途 / Purpose:** 处理 `go to link` 相关逻辑。

### GoToLink
`public void GoToLink(string link)`

**用途 / Purpose:** 处理 `go to link` 相关逻辑。

### SetLinkCallback
`public void SetLinkCallback(Action<string, object> ExecuteLink)`

**用途 / Purpose:** 设置 `link callback` 的值或状态。

## 使用示例

```csharp
var manager = EncyclopediaManager.Current;
```

## 参见

- [完整类目录](../catalog)
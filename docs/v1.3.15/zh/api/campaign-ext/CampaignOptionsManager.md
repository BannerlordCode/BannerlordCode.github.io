<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignOptionsManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignOptionsManager

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignOptionsManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionsManager.cs`

## 概述

`CampaignOptionsManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CampaignOptionsManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetOptionWithIdExists
`public static bool GetOptionWithIdExists(string identifier)`

**用途 / Purpose:** 获取 `option with id exists` 的当前值。

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### ClearCachedOptions
`public static void ClearCachedOptions()`

**用途 / Purpose:** 处理 `clear cached options` 相关逻辑。

### GetGameplayCampaignOptions
`public static List<ICampaignOptionData> GetGameplayCampaignOptions()`

**用途 / Purpose:** 获取 `gameplay campaign options` 的当前值。

### GetCharacterCreationCampaignOptions
`public static List<ICampaignOptionData> GetCharacterCreationCampaignOptions()`

**用途 / Purpose:** 获取 `character creation campaign options` 的当前值。

## 使用示例

```csharp
var manager = CampaignOptionsManager.Current;
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BirthAndDeathOptionsProvider`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BirthAndDeathOptionsProvider

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BirthAndDeathOptionsProvider : ICampaignOptionProvider`
**Base:** `ICampaignOptionProvider`
**File:** `Bannerlord.Source/Modules.BirthAndDeath/TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath/BirthAndDeathOptionsProvider.cs`

## 概述

`BirthAndDeathOptionsProvider` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetGameplayCampaignOptions
`public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()`

**用途 / Purpose:** 获取 `gameplay campaign options` 的当前值。

### GetCharacterCreationCampaignOptions
`public IEnumerable<ICampaignOptionData> GetCharacterCreationCampaignOptions()`

**用途 / Purpose:** 获取 `character creation campaign options` 的当前值。

## 使用示例

```csharp
var value = new BirthAndDeathOptionsProvider();
value.GetGameplayCampaignOptions();
```

## 参见

- [完整类目录](../catalog)
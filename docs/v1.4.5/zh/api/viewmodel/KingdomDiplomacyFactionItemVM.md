<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomDiplomacyFactionItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomDiplomacyFactionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomDiplomacyFactionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy/KingdomDiplomacyFactionItemVM.cs`

## 概述

`KingdomDiplomacyFactionItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `Visual` | `public BannerImageIdentifierVM Visual { get; set; }` |

## 使用示例

```csharp
var example = new KingdomDiplomacyFactionItemVM();
```

## 参见

- [完整类目录](../catalog)
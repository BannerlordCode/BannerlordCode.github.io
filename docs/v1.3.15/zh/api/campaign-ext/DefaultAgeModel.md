<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultAgeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultAgeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAgeModel : AgeModel`
**Base:** `AgeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs`

## 概述

`DefaultAgeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultAgeModel>(new MyDefaultAgeModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `BecomeInfantAge` | `public override int BecomeInfantAge { get; }` |
| `BecomeChildAge` | `public override int BecomeChildAge { get; }` |
| `BecomeTeenagerAge` | `public override int BecomeTeenagerAge { get; }` |
| `HeroComesOfAge` | `public override int HeroComesOfAge { get; }` |
| `MiddleAdultHoodAge` | `public override int MiddleAdultHoodAge { get; }` |
| `BecomeOldAge` | `public override int BecomeOldAge { get; }` |
| `MaxAge` | `public override int MaxAge { get; }` |

## 主要方法

### GetAgeLimitForLocation
```csharp
public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")
```

## 使用示例

```csharp
// DefaultAgeModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultAgeModel>(new MyDefaultAgeModel());
```

## 参见

- [完整类目录](../catalog)
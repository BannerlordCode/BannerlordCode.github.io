<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBodyPropertiesModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBodyPropertiesModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBodyPropertiesModel : BodyPropertiesModel`
**Base:** `BodyPropertiesModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBodyPropertiesModel.cs`

## 概述

`DefaultBodyPropertiesModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultBodyPropertiesModel>(new MyDefaultBodyPropertiesModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetHairIndicesForCulture
```csharp
public override int GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture)
```

### GetBeardIndicesForCulture
```csharp
public override int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)
```

### GetTattooIndicesForCulture
```csharp
public override int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)
```

## 使用示例

```csharp
// DefaultBodyPropertiesModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultBodyPropertiesModel>(new MyDefaultBodyPropertiesModel());
```

## 参见

- [完整类目录](../catalog)
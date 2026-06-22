<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BodyPropertiesModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BodyPropertiesModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BodyPropertiesModel : MBGameModel<BodyPropertiesModel>`
**Base:** `MBGameModel<BodyPropertiesModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BodyPropertiesModel.cs`

## 概述

`BodyPropertiesModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BodyPropertiesModel>(new MyBodyPropertiesModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetHairIndicesForCulture
```csharp
public abstract int GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture)
```

### GetBeardIndicesForCulture
```csharp
public abstract int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)
```

### GetTattooIndicesForCulture
```csharp
public abstract int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)
```

## 使用示例

```csharp
// BodyPropertiesModel (Model) 的典型用法
Game.Current.ReplaceModel<BodyPropertiesModel>(new MyBodyPropertiesModel());
```

## 参见

- [完整类目录](../catalog)
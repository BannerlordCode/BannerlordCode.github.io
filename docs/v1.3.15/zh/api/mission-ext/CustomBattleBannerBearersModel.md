<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleBannerBearersModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleBannerBearersModel : BattleBannerBearersModel`
**Base:** `BattleBannerBearersModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleBannerBearersModel.cs`

## 概述

`CustomBattleBannerBearersModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CustomBattleBannerBearersModel>(new MyCustomBattleBannerBearersModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetMinimumFormationTroopCountToBearBanners
```csharp
public override int GetMinimumFormationTroopCountToBearBanners()
```

### GetBannerInteractionDistance
```csharp
public override float GetBannerInteractionDistance(Agent interactingAgent)
```

### CanBannerBearerProvideEffectToFormation
```csharp
public override bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)
```

### CanAgentPickUpAnyBanner
```csharp
public override bool CanAgentPickUpAnyBanner(Agent agent)
```

### CanAgentBecomeBannerBearer
```csharp
public override bool CanAgentBecomeBannerBearer(Agent agent)
```

### GetAgentBannerBearingPriority
```csharp
public override int GetAgentBannerBearingPriority(Agent agent)
```

### CanFormationDeployBannerBearers
```csharp
public override bool CanFormationDeployBannerBearers(Formation formation)
```

### GetDesiredNumberOfBannerBearersForFormation
```csharp
public override int GetDesiredNumberOfBannerBearersForFormation(Formation formation)
```

### GetBannerBearerReplacementWeapon
```csharp
public override ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)
```

## 使用示例

```csharp
// CustomBattleBannerBearersModel (Model) 的典型用法
Game.Current.ReplaceModel<CustomBattleBannerBearersModel>(new MyCustomBattleBannerBearersModel());
```

## 参见

- [完整类目录](../catalog)
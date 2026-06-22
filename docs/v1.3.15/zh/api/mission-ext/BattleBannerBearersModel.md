<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleBannerBearersModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleBannerBearersModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleBannerBearersModel : MBGameModel<BattleBannerBearersModel>`
**Base:** `MBGameModel<BattleBannerBearersModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs`

## 概述

`BattleBannerBearersModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BattleBannerBearersModel>(new MyBattleBannerBearersModel())` 注册，以改变其计算逻辑。

## 主要方法

### InitializeModel
```csharp
public void InitializeModel(BannerBearerLogic bannerBearerLogic)
```

### FinalizeModel
```csharp
public void FinalizeModel()
```

### IsFormationBanner
```csharp
public bool IsFormationBanner(Formation formation, SpawnedItemEntity item)
```

### IsBannerSearchingAgent
```csharp
public bool IsBannerSearchingAgent(Agent agent)
```

### IsInteractableFormationBanner
```csharp
public bool IsInteractableFormationBanner(SpawnedItemEntity item, Agent interactingAgent)
```

### HasFormationBanner
```csharp
public bool HasFormationBanner(Formation formation)
```

### HasBannerOnGround
```csharp
public bool HasBannerOnGround(Formation formation)
```

### GetFormationBanner
```csharp
public ItemObject GetFormationBanner(Formation formation)
```

### GetFormationBannerBearers
```csharp
public List<Agent> GetFormationBannerBearers(Formation formation)
```

### GetActiveBanner
```csharp
public BannerComponent GetActiveBanner(Formation formation)
```

### GetMinimumFormationTroopCountToBearBanners
```csharp
public abstract int GetMinimumFormationTroopCountToBearBanners()
```

### GetBannerInteractionDistance
```csharp
public abstract float GetBannerInteractionDistance(Agent interactingAgent)
```

### CanBannerBearerProvideEffectToFormation
```csharp
public abstract bool CanBannerBearerProvideEffectToFormation(Agent agent, Formation formation)
```

### CanAgentPickUpAnyBanner
```csharp
public abstract bool CanAgentPickUpAnyBanner(Agent agent)
```

### CanAgentBecomeBannerBearer
```csharp
public abstract bool CanAgentBecomeBannerBearer(Agent agent)
```

### GetAgentBannerBearingPriority
```csharp
public abstract int GetAgentBannerBearingPriority(Agent agent)
```

### CanFormationDeployBannerBearers
```csharp
public abstract bool CanFormationDeployBannerBearers(Formation formation)
```

### GetDesiredNumberOfBannerBearersForFormation
```csharp
public abstract int GetDesiredNumberOfBannerBearersForFormation(Formation formation)
```

### GetBannerBearerReplacementWeapon
```csharp
public abstract ItemObject GetBannerBearerReplacementWeapon(BasicCharacterObject agentCharacter)
```

## 使用示例

```csharp
// BattleBannerBearersModel (Model) 的典型用法
Game.Current.ReplaceModel<BattleBannerBearersModel>(new MyBattleBannerBearersModel());
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleInitializationModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleInitializationModel : MBGameModel<BattleInitializationModel>`
**Base:** `MBGameModel<BattleInitializationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs`

## 概述

`BattleInitializationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BattleInitializationModel>(new MyBattleInitializationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetAllAvailableTroopTypes
```csharp
public abstract List<FormationClass> GetAllAvailableTroopTypes()
```

### CanPlayerSideDeployWithOrderOfBattle
```csharp
public bool CanPlayerSideDeployWithOrderOfBattle()
```

### InitializeModel
```csharp
public void InitializeModel()
```

### FinalizeModel
```csharp
public void FinalizeModel()
```

## 使用示例

```csharp
// BattleInitializationModel (Model) 的典型用法
Game.Current.ReplaceModel<BattleInitializationModel>(new MyBattleInitializationModel());
```

## 参见

- [完整类目录](../catalog)
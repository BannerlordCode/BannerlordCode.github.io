<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerBattleInitializationModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerBattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleInitializationModel : BattleInitializationModel`
**Base:** `BattleInitializationModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerBattleInitializationModel.cs`

## 概述

`MultiplayerBattleInitializationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MultiplayerBattleInitializationModel>(new MyMultiplayerBattleInitializationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetAllAvailableTroopTypes
```csharp
public override List<FormationClass> GetAllAvailableTroopTypes()
```

## 使用示例

```csharp
// MultiplayerBattleInitializationModel (Model) 的典型用法
Game.Current.ReplaceModel<MultiplayerBattleInitializationModel>(new MyMultiplayerBattleInitializationModel());
```

## 参见

- [完整类目录](../catalog)
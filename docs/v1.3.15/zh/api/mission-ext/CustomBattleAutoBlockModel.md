<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleAutoBlockModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleAutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAutoBlockModel : AutoBlockModel`
**Base:** `AutoBlockModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAutoBlockModel.cs`

## 概述

`CustomBattleAutoBlockModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CustomBattleAutoBlockModel>(new MyCustomBattleAutoBlockModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetBlockDirection
```csharp
public override Agent.UsageDirection GetBlockDirection(Mission mission)
```

## 使用示例

```csharp
// CustomBattleAutoBlockModel (Model) 的典型用法
Game.Current.ReplaceModel<CustomBattleAutoBlockModel>(new MyCustomBattleAutoBlockModel());
```

## 参见

- [完整类目录](../catalog)
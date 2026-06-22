<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleApplyWeatherEffectsModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleApplyWeatherEffectsModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleApplyWeatherEffectsModel : ApplyWeatherEffectsModel`
**Base:** `ApplyWeatherEffectsModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleApplyWeatherEffectsModel.cs`

## 概述

`CustomBattleApplyWeatherEffectsModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CustomBattleApplyWeatherEffectsModel>(new MyCustomBattleApplyWeatherEffectsModel())` 注册，以改变其计算逻辑。

## 主要方法

### ApplyWeatherEffects
```csharp
public override void ApplyWeatherEffects()
```

## 使用示例

```csharp
// CustomBattleApplyWeatherEffectsModel (Model) 的典型用法
Game.Current.ReplaceModel<CustomBattleApplyWeatherEffectsModel>(new MyCustomBattleApplyWeatherEffectsModel());
```

## 参见

- [完整类目录](../catalog)
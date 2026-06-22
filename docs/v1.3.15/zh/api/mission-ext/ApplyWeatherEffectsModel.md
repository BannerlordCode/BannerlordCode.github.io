<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ApplyWeatherEffectsModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ApplyWeatherEffectsModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ApplyWeatherEffectsModel : MBGameModel<ApplyWeatherEffectsModel>`
**Base:** `MBGameModel<ApplyWeatherEffectsModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/ApplyWeatherEffectsModel.cs`

## 概述

`ApplyWeatherEffectsModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<ApplyWeatherEffectsModel>(new MyApplyWeatherEffectsModel())` 注册，以改变其计算逻辑。

## 主要方法

### ApplyWeatherEffects
```csharp
public abstract void ApplyWeatherEffects()
```

## 使用示例

```csharp
// ApplyWeatherEffectsModel (Model) 的典型用法
Game.Current.ReplaceModel<ApplyWeatherEffectsModel>(new MyApplyWeatherEffectsModel());
```

## 参见

- [完整类目录](../catalog)
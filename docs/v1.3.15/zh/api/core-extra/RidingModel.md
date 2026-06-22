<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RidingModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RidingModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class RidingModel : MBGameModel<RidingModel>`
**Base:** `MBGameModel<RidingModel>`
**File:** `TaleWorlds.Core/RidingModel.cs`

## 概述

`RidingModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<RidingModel>(new MyRidingModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateAcceleration
```csharp
public abstract float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill)
```

## 使用示例

```csharp
// RidingModel (Model) 的典型用法
Game.Current.ReplaceModel<RidingModel>(new MyRidingModel());
```

## 参见

- [完整类目录](../catalog)
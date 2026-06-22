<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultRidingModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultRidingModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultRidingModel : RidingModel`
**Base:** `RidingModel`
**File:** `TaleWorlds.Core/DefaultRidingModel.cs`

## 概述

`DefaultRidingModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultRidingModel>(new MyDefaultRidingModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateAcceleration
```csharp
public override float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill)
```

## 使用示例

```csharp
// DefaultRidingModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultRidingModel>(new MyDefaultRidingModel());
```

## 参见

- [完整类目录](../catalog)
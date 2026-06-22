<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerClassLoadoutTroopSubclassButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutTroopSubclassButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopSubclassButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopSubclassButtonWidget.cs`

## 概述

`MultiplayerClassLoadoutTroopSubclassButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopType` | `public string TroopType { get; set; }` |
| `IconBrush` | `public Brush IconBrush { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |
| `PerksNavigationScopeTargeter` | `public NavigationScopeTargeter PerksNavigationScopeTargeter { get; set; }` |

## 主要方法

### SetState
```csharp
public override void SetState(string stateName)
```

## 使用示例

```csharp
// MultiplayerClassLoadoutTroopSubclassButtonWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerClassLoadoutTroopSubclassButtonWidget
var widget = root.GetChild("multiplayerClassLoadoutTroopSubclassButtonWidget");;
```

## 参见

- [完整类目录](../catalog)
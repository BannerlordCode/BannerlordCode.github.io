<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerClassLoadoutTroopTupleVisualWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutTroopTupleVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopTupleVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopTupleVisualWidget.cs`

## 概述

`MultiplayerClassLoadoutTroopTupleVisualWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `FactionCode` | `public string FactionCode { get; set; }` |
| `TroopTypeCode` | `public string TroopTypeCode { get; set; }` |

## 使用示例

```csharp
// MultiplayerClassLoadoutTroopTupleVisualWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerClassLoadoutTroopTupleVisualWidget
var widget = root.GetChild("multiplayerClassLoadoutTroopTupleVisualWidget");;
```

## 参见

- [完整类目录](../catalog)
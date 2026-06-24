<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerEndOfBattleScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerEndOfBattleScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfBattleScreenWidget`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer/MultiplayerEndOfBattleScreenWidget.cs`

## 概述

`MultiplayerEndOfBattleScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerEndOfBattleScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsShown` | `public bool IsShown { get; set; }` |
| `FadeInDuration` | `public float FadeInDuration { get; set; }` |

## 主要方法

### MultiplayerEndOfBattleScreenWidget
`public class MultiplayerEndOfBattleScreenWidget(UIContext context)`

**用途 / Purpose:** 处理 `multiplayer end of battle screen widget` 相关逻辑。

## 使用示例

```csharp
var widget = new MultiplayerEndOfBattleScreenWidget(context);
```

## 参见

- [完整类目录](../catalog)
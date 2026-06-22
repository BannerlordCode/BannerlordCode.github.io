<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DisabledAlphaChangerWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DisabledAlphaChangerWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DisabledAlphaChangerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/DisabledAlphaChangerWidget.cs`

## 概述

`DisabledAlphaChangerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `DisabledAlpha` | `public float DisabledAlpha { get { return this._disabledAlpha; }` |
| `AnimationDuration` | `public float AnimationDuration { get { return this._animationDuration; }` |
| `UpdateChildrenAlphas` | `public bool UpdateChildrenAlphas { get { return this._updateChildrenAlphas; }` |

## 使用示例

```csharp
// DisabledAlphaChangerWidget (Widget) 的典型用法
// 声明/访问一个 DisabledAlphaChangerWidget
var widget = root.GetChild("disabledAlphaChangerWidget");;
```

## 参见

- [完整类目录](../catalog)
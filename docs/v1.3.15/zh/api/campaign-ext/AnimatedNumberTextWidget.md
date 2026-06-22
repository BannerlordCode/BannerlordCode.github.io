<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AnimatedNumberTextWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnimatedNumberTextWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedNumberTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs`

## 概述

`AnimatedNumberTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `AnimationDelay` | `public float AnimationDelay { get { return this._animationDelay; }` |
| `AnimationDuration` | `public float AnimationDuration { get { return this._animationDuration; }` |
| `ReferenceNumber` | `public int ReferenceNumber { get { return this._referenceNumber; }` |
| `Number` | `public int Number { get { return this._number; }` |
| `AutoStart` | `public bool AutoStart { get { return this._autoStart; }` |

## 主要方法

### StartAnimation
```csharp
public void StartAnimation()
```

### Reset
```csharp
public void Reset()
```

## 使用示例

```csharp
// AnimatedNumberTextWidget (Widget) 的典型用法
// 声明/访问一个 AnimatedNumberTextWidget
var widget = root.GetChild("animatedNumberTextWidget");;
```

## 参见

- [完整类目录](../catalog)
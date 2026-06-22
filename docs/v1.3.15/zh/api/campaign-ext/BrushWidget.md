<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrushWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BrushWidget.cs`

## 概述

`BrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ReadOnlyBrush` | `public Brush ReadOnlyBrush { get { if (this._clonedBrush != null) { return this._clonedBrush; }` |
| `Sprite` | `public new Sprite Sprite { get { return this.ReadOnlyBrush.DefaultStyle.GetLayer("Default").Sprite; }` |

## 主要方法

### UpdateBrushes
```csharp
public override void UpdateBrushes(float dt)
```

### SetState
```csharp
public override void SetState(string stateName)
```

### UpdateAnimationPropertiesSubTask
```csharp
public override void UpdateAnimationPropertiesSubTask(float alphaFactor)
```

### OnBrushChanged
```csharp
public virtual void OnBrushChanged()
```

## 使用示例

```csharp
// BrushWidget (Widget) 的典型用法
// 声明/访问一个 BrushWidget
var widget = root.GetChild("brushWidget");;
```

## 参见

- [完整类目录](../catalog)
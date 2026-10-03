---
title: "Canvas"
description: "GauntletUI 里一套独立的 XML 画布子系统：构造只有 SpriteData + FontFactory，LoadFrom 只认 Image / TextBox 两个标签名（CanvasLine 系永远进不来），_root 为 null 时四个转发方法全部 NRE。"
---

# Canvas

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Canvas`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/Canvas.cs`

## 概述

`TaleWorlds.GauntletUI` 里有一套**与 Widget 体系并行、但完全独立**的迷你 UI 树：XML 声明 → 画布对象树 → 测量/布局/渲染三个阶段。`Canvas` 是这棵树的根容器，92 行，**一个公开属性 + 一个构造函数 + 五个方法，全部是 `_root` 的转发器**。

```csharp
public class Canvas(SpriteData spriteData, FontFactory fontFactory)   // :12
{
    public CanvasObject Root { get { return this._root; } }          // :20
    public void LoadFrom(XmlNode canvasNode) { ... }                // :29
    public void Update(float scale)         { this._root.Update(scale); }
    public void DoMeasure(bool fixedWidth, bool fixedHeight, float width, float height)
                                           { this._root.BeginMeasure(...); }
    public void DoLayout()                  { this._root.DoLayout(); }
    public void DoRender(Vector2 globalPosition, TwoDimensionDrawContext drawContext)
                                           { this._root.DoRender(...); }
}
```

后四个方法**一行转发，没有一次判空**。`_root` 由 `LoadFrom` 决定，**`LoadFrom` 之前它是 null**。

## 心智模型

**它是一棵手写的、只有「测量 → 布局 → 渲染」三个阶段的迷你场景树。** 节点类型与三阶段的关系（全部来自 `CanvasObject` 的实现）：

| 阶段 | `CanvasObject` 的实现 | 做了什么 |
| --- | --- | --- |
| `Update(scale)` | 存 `this.Scale = scale` → 虚 `OnUpdate` → **先自己再递归所有 `Children`** | 把缩放系数传下去。只有 `Scale` / `LocalPosition` / `Width` / `Height` 这四个属性会写。 |
| `BeginMeasure(fixedWidth, fixedHeight, width, height)` | 先无条件 `DoMeasure()`，再按 `fixed*` 覆盖宽高 | `DoMeasure()` 递归子节点，取 `Max(child.Width + child.GetMarginSize())` 与虚 `Measure()` 的最大值。 |
| `DoLayout()` | `this.LocalPosition = this.Layout()` → 递归子节点 | `Layout()` 是虚方法，基类返回 `Vector2.Zero`。**基类不做任何对齐/堆叠——真正的排版逻辑在 `CanvasLine.Layout()` 里（按 `Alignment` 算 X）。** |
| `DoRender(globalPosition, drawContext)` | 虚 `Render(globalPosition, drawContext)` → **用 `this.LocalPosition` 偏移后递归子节点** | `globalPosition + this.LocalPosition`。注意偏移用的是**自己的** `LocalPosition`，不是子节点的。 |

**「谁创建 Canvas」只有一处**：`CanvasWidget`（`TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasWidget.cs`），一个 `Widget, ILayout` 的派生类：

```csharp
// CanvasWidget.cs:95-102
private void UpdateCanvas()
{
    this._canvas = new Canvas(base.EventManager.Context.SpriteData, base.EventManager.Context.FontFactory);
    this._canvas.LoadFrom(this.CanvasNode);      // CanvasNode 是 public XmlElement { get; set; }
    this._requiresUpdate = false;
}
```

**资源不是自己找的，是从 `EventManager.Context` 上摘的**——`SpriteData` 与 `FontFactory` 都来自 Gauntlet 的全局渲染上下文。所以**你不能脱离 `CanvasWidget` 之外随便 new 一个 Canvas**，除非你自己手里有这两样东西。

`CanvasWidget` 的三阶段驱动形状就是标准的两趟：

```csharp
// :86-93  每帧
private void DoUpdate()
{
    if (this._requiresUpdate || this._canvas == null) { this.UpdateCanvas(); }
    this._canvas.Update(base._scaleToUse);
}

// :105-113  渲染
protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)
{
    base.OnRender(...);
    if (this._canvas != null)
    {
        Vector2 topLeft = this.AreaRect.TopLeft;
        this._canvas.DoRender(topLeft, drawContext);
    }
}

// :115-125  ILayout.MeasureChildren：画布尺寸参与 Widget 布局计算
Vector2 ILayout.MeasureChildren(Widget widget, Vector2 measureSpec, SpriteData spriteData, float renderScale)
{
    Vector2 vector = this._defaultLayout.MeasureChildren(widget, measureSpec, spriteData, renderScale);
    if (this._canvas != null)
    {
        this._canvas.DoMeasure(...);
        vector.X = Mathf.Max(this._canvas.Root.Width, vector.X);
        vector.Y = Mathf.Max(this._canvas.Root.Height, vector.Y);
    }
    return vector;
}
```

**注意 `MeasureChildren` 里取的是 `this._canvas.Root.Width`——`Root` 为 null 就 NRE，而判空只判了 `_canvas`。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Canvas(SpriteData, FontFactory)` | 公开构造函数 | **只存两个字段，不建树。** 传 null 也能构造成功，崩溃推迟到 `LoadFrom` 之后。 |
| `Root` | `public CanvasObject Root { get; }` | 根节点。**只读、且在 `LoadFrom` 之前是 null。** 唯一能拿到 `Children` 列表的入口（`CanvasObject.Children` 是 `{ get; private set; }` 的 `List<CanvasObject>`）。 |
| `LoadFrom(XmlNode)` | `public void LoadFrom(XmlNode canvasNode)` | 唯一的建树入口，**先无条件 `this._root = null`**。传 null 时整个方法变成「把 `_root` 清成 null 后什么都不做」——**这是制造后续 NRE 的最直接方式。** |
| `Update(float scale)` | `public void Update(float scale)` | 转发到 `_root.Update(scale)`。**每帧都被 `CanvasWidget.DoUpdate` 调一次**，与 XML 是否变化无关。 |
| `DoMeasure(bool, bool, float, float)` | `public void DoMeasure(bool fixedWidth, bool fixedHeight, float width, float height)` | 转发到 `_root.BeginMeasure(...)`。四个参数由 `CanvasWidget` 按 `SizePolicy` 推导：`WidthSizePolicy != SizePolicy.CoverChildren || MaxWidth != 0f` 之类。 |
| `DoLayout()` | `public void DoLayout()` | 转发到 `_root.DoLayout()`。由 `CanvasWidget` 的 `ILayout.OnLayout` 调。 |
| `DoRender(Vector2, TwoDimensionDrawContext)` | `public void DoRender(Vector2 globalPosition, TwoDimensionDrawContext drawContext)` | 转发到 `_root.DoRender(...)`。由 `CanvasWidget.OnRender` 把 `AreaRect.TopLeft` 当 `globalPosition` 传进来。 |

## 真实示例

**用法一：正常用法是走 `CanvasWidget`，不要自己 new `Canvas`。**

```csharp
// 正确姿势：XmlElement 直接喂给 CanvasWidget.CanvasNode（public XmlElement { get; set; }）
XmlElement canvasNode = LoadPrefabXmlFragment("MyCanvas");
if (canvasNode != null)
{
    myCanvasWidget.CanvasNode = canvasNode;   // 置 null 会触发 _requiresUpdate 路径的重建
}
```

`CanvasWidget.CanvasNode` 的 setter 会 `base.OnPropertyChanged<XmlElement>(value, "CanvasNode")`（`:59`），走的是 Widget 的属性变更通知——**但 `_requiresUpdate` 是在别处置位的，改 `CanvasNode` 是否立刻重建取决于 setter 有没有置位它**；从源码看 setter 只发通知，**没有置 `_requiresUpdate`**，重建实际发生在 `DoUpdate` 里的 `this._canvas == null` 分支之外——这意味着**换掉 CanvasNode 之后不会自动重建，除非重建路径被触发**。

**用法二：自己管一棵画布树（形状与 `CanvasWidget.UpdateCanvas` 一致）。**

```csharp
using System.Numerics;
using System.Xml;
using TaleWorlds.GauntletUI.Canvas;
using TaleWorlds.Library;
using TaleWorlds.TwoDimension;

public class MyCanvasHost : Widget
{
    private Canvas _canvas;

    private void BuildCanvas(XmlElement node, SpriteData spriteData, FontFactory fontFactory)
    {
        // 形状逐字对照 CanvasWidget.cs:99-101
        this._canvas = new Canvas(spriteData, fontFactory);
        this._canvas.LoadFrom(node);          // node 为 null 时 _root 保持 null
    }

    protected override void OnFinalize()
    {
        this._canvas = null;
        base.OnFinalize();
    }

    // 每帧两趟：先 Update 再按布局阶段 Measure/Layout/Render
    private void Tick(float dt, float scale)
    {
        if (this._canvas == null || this._canvas.Root == null)
        {
            return;                          // ← 自己补上 Canvas/CanvasWidget 都没做的那道判空
        }

        this._canvas.Update(scale);
        this._canvas.DoMeasure(false, false, 0f, 0f);
        this._canvas.DoLayout();
        this._canvas.DoRender(Vector2.Zero, this.EventManager.Context.DefaultDrawingContext);
    }
}
```

**这段代码比 `CanvasWidget` 多做了一件事：判 `Root`。** `CanvasWidget` 三处都只判 `_canvas != null`（`OnRender`、`MeasureChildren`、`OnLayout`），而 `_canvas` 在 `LoadFrom(null)` 之后**是非 null 的对象但 `Root` 是 null**，所以那三处都会 NRE。

## 风险与边界

- **`LoadFrom` 只认 `Image` 和 `TextBox` 两个标签名，其余一律静默丢弃。** `Canvas.cs:39-50` 是 `if (xmlNode.Name == "Image") {...} else if (xmlNode.Name == "TextBox") {...}`，之后 `if (canvasElement != null)` 才 add。**同目录下明明还有 `CanvasLine` / `CanvasLineElement` / `CanvasLineImage` / `CanvasLineText` / `CanvasWidget` / `CanvasLineAlignment` 六类，但 `Canvas.LoadFrom` 一个都不会实例化。** 效果是：XML 里写错一个标签名（比如把 `<Line>` 写成 `<TextBox>` 之外的任何形式）**不报错、不警告、什么都不画**。`CanvasLine` 只能通过 `CanvasTextBox.LoadFrom` 间接产生（下面那条）。
- **`CanvasTextBox.LoadFrom` 反而不过滤标签名，把每一个子节点都当 `CanvasLine`。** `CanvasTextBox.cs:22-33` 是 `foreach (object obj in canvasTextNode) { XmlNode lineNode = (XmlNode)obj; CanvasLine canvasLine = new CanvasLine(this, num, ...); canvasLine.LoadFrom(lineNode); ... }`——**没有 `Name` 判断**。所以 `<TextBox>` 里塞一个 `<Image>`，它也会被包成 `CanvasLine` 去解析。**父子两级的过滤规则不一致：父级严格按名字过滤，子级完全不按名字过滤。**
- **`LoadFrom(null)` 之后四个方法全部 NRE，而且失败点在远处。** `Canvas.LoadFrom` 的实现是 `this._root = null; if (canvasNode != null) { ... }`。传 null 之后 `_canvas` 对象仍然存在、`Root` 返回 null，而 `Update` / `DoMeasure` / `DoLayout` / `DoRender` 四个转发器**一个判空都没有**。`CanvasWidget` 那三处调用点也只判 `_canvas != null`。**结果就是：XML 节点缺失 → 布局阶段或渲染阶段炸 `NullReferenceException`，堆栈里完全看不到「XML 节点是 null」这个真正原因。**
- **`Root` 在 `LoadFrom` 之前是 null，`CanvasWidget.MeasureChildren` 无条件读 `Root.Width`。** `CanvasWidget.cs:123-124`：`vector.X = Mathf.Max(this._canvas.Root.Width, vector.X);`——`this._canvas != null` 通过之后紧接着就解引用 `Root`。**这是本子系统最容易触发的空引用点。**
- **三阶段顺序由宿主保证，`Canvas` 自己不校验。** 正确顺序是 `Update(scale)` → `DoMeasure(...)` → `DoLayout()` → `DoRender(...)`。`CanvasObject.BeginMeasure` 里的 `DoMeasure()` 依赖 `Width` / `Height`，而 `Width` / `Height` 是上一次 `DoMeasure` 写进去的——**跳过 `Update(scale)` 时 `Scale` 是上一次的值，尺寸计算会整体偏掉**，且不报错。`DoLayout` 依赖 `DoMeasure` 写出的 `Width` / `Height`，`DoRender` 依赖 `DoLayout` 写出的 `LocalPosition`。
- **`Layout()` 在基类里返回 `Vector2.Zero`，基类不做任何排版。** `CanvasObject.Layout()` 是 `protected virtual`，返回零向量。**真正的对齐逻辑只在 `CanvasLine.Layout()` 里（按 `CanvasLineAlignment.Left` / `Center` / `Right` 算 X）。** 所以如果你继承 `CanvasObject` 写新节点而不覆写 `Layout()`，它的子节点会**全部堆在 (0,0)**——不是错位，是叠在一起。
- **`CanvasImage.Render` 在 1.3.0 的反编译形态下是一个空壳。** `CanvasImage.cs` 的 `protected override void Render(...)` 全体是 `if (this.Sprite != null) { Texture texture = this.Sprite.Texture; }`——**取了纹理就丢掉，没有任何绘制调用**。这是反编译产物（真正的绘制在 native/PInvoke 侧被抹掉了），但它意味着**你无法从这份源码推断出画布的最终成像**，也无法在此基础上写新的绘制节点。
- **`SpriteData.GetSprite(value)` 找不到精灵时返回 null，`Measure` / `Render` 都判 null 返回零尺寸。** `CanvasImage.LoadFrom` 是 `this.Sprite = base.SpriteData.GetSprite(value);`，`Measure()` 是 `if (this.Sprite != null) { ... }`，`Render()` 同样。**精灵名写错 → 图片节点量出 0×0、什么都不画、不报错。**
- **整棵子树依赖 `EventManager.Context` 的全局资源。** 构造函数收的 `SpriteData` / `FontFactory` 都是宿主从 `EventManager.Context` 上摘的，不是自己加载的。**`FontFactory` 是从 context 上直接取的引用（不 new、不缓存、不释放），`Canvas` 也没有任何 `Dispose` / `Unload`。**
- **`TaleWorlds.GauntletUI.Canvas` 这一整组在 1.4.6 起被删除**（见跨版本段）。**这是本批 14 个类型里第二个跨版本消失的类型**，而 `BattleSimulationResult` 只是数据契约、本类型是可直接使用的 UI 组件——**这个的消失影响更大。**

## 跨版本提示

**`TaleWorlds.GauntletUI.Canvas` 命名空间下的整组类型在 `bannerlord-1.4.6` / `1.4.7` / `1.5.3` 三棵树里完全不存在。** 逐项核查：

| 树 | `Canvas.cs` | `CanvasObject.cs` | `CanvasImage` / `CanvasTextBox` | `CanvasLine` / `CanvasLineElement` / `CanvasLineImage` / `CanvasLineText` |
| --- | --- | --- | --- | --- |
| 1.3.0 | 存在（92 行，6 成员） | 存在 | 存在 | 存在 |
| 1.3.15 | 不适用（树内 `TaleWorlds.GauntletUI` 工程不含 `Canvas/` 目录） | 同左 | 同左 | 同左 |
| 1.4.5 | 不适用（树内只有裁剪过的 `Bannerlord.Source`） | 同左 | 同左 | 同左 |
| 1.4.6 | **不存在** | **不存在** | **不存在** | **不存在** |
| 1.4.7 | **不存在** | **不存在** | **不存在** | **不存在** |
| 1.5.3 | **不存在** | **不存在** | **不存在** | **不存在** |

搜索口径是 `grep -rn "CanvasObject" --include=*.cs .`，1.4.6 与 1.5.3 上**零命中**——不是改名，是整组删除。

`Canvas.cs` 自身在 1.3.0 与 1.4.6 之间的对比不成立（1.4.6 上没有这个文件），但 1.3.0 与 1.3.15 之间也没有可对照的差异。**唯一能确定的是：六个成员（`Canvas(SpriteData, FontFactory)` / `Root` / `LoadFrom` / `Update` / `DoMeasure` / `DoLayout` / `DoRender`）是 1.3.x 的全部公开面，没有第二个构造函数、没有静态工厂、没有事件。**

`FontFactory` 与 `SpriteData` 这两个依赖类型在 1.5.3 上仍然存在（`FontFactory` 在 `gui` 桶有独立页面），所以**删除的是画布子系统本身，不是它的资源依赖**。

**对 mod 的结论，按版本分两条路：**

- **目标 1.3.x**：子系统在，但有三个已验证的失效点——`LoadFrom` 丢弃除 `Image` / `TextBox` 之外的一切标签、`LoadFrom(null)` 之后四个转发方法 NRE、`CanvasWidget` 三处只判 `_canvas` 不判 `Root`。要用它就必须自己补判空。
- **目标 1.4.6+**：`TaleWorlds.GauntletUI.Canvas` 整个命名空间不存在，**任何引用都会编译不过**（不是运行时报错）。这意味着 **mod 里不能有任何一行代码引用 `Canvas` / `CanvasObject` / `CanvasImage`**，哪怕只是 `typeof(Canvas)` 反射探测也不行。

**跨版本安全的做法：不引用 `Canvas`。** 它在 1.3.x 上坑多、在 1.4.6+ 上不存在，两头都没有收益。想在 1.3.x 上做自定义 XML 画布，正确路径是继承 `Widget` 走主 Widget 体系（那套在 1.5.3 上仍然完整）。1.3.15 与 1.4.5 两棵树是裁剪过的部分源码（前者只有引擎侧程序集，后者只有 `Bannerlord.Source`），无法作为中间版本对照。

## 依赖关系

- 宿主：[CanvasWidget](../CanvasWidget)（`TaleWorlds.GauntletUI/.../Canvas/CanvasWidget.cs`，`public class CanvasWidget : Widget, ILayout`）是 1.3.0 里唯一的创建者，持有 `public XmlElement CanvasNode { get; set; }`
- 资源依赖：`SpriteData`（无文档页，来自 `EventManager.Context`）与 [FontFactory](../../gui/FontFactory)（1.5.3 上仍在）
- 根节点：[CanvasObject](../CanvasObject)（`Parent` / `Children` / `Scale` / `LocalPosition` / `Width` / `Height` 六个 `{ get; private set; }`，以及 `Update` / `BeginMeasure` / `DoMeasure` / `DoLayout` / `DoRender` 五个虚与非虚方法的实现）
- `LoadFrom` 直接实例化的两个子类：`CanvasImage`（读 `Sprite` 属性 → `SpriteData.GetSprite`）与 `CanvasTextBox`（把每个子节点包成 `CanvasLine`）
- 间接可达但**不被 `Canvas.LoadFrom` 实例化**的类型：`CanvasLine` / `CanvasLineElement` / `CanvasLineImage` / `CanvasLineText` / `CanvasLineAlignment`（同命名空间，同工程）
- 渲染出口：`TaleWorlds.TwoDimension` 的 `TwoDimensionDrawContext`（`DoRender` 参数）、`TaleWorlds.Library` 的 `Vec2` / `Mathf`
- 桶首页：[campaign-ext API 分区](../)
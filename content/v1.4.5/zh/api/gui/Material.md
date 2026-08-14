---
title: "Material"
description: "TwoDimension（2D/UI 渲染）层里“一次 2D 绘制调用的着色参数包”抽象基类：描述精灵、文字或纯色多边形用什么混合模式、什么渲染顺序画出来；mod 经 Brush/Sprite 间接拿到具体子类，或自己构造以驱动 TwoDimensionDrawContext。"
---

# Material

**Namespace:** `TaleWorlds.TwoDimension`  
**Module:** `TaleWorlds.TwoDimension`  
**Type:** `public abstract class Material`  
**Base:** 无  
**源文件：** `TaleWorlds.TwoDimension/Material.cs`

## 职责一句话

`Material` 是 **2D 渲染的一次绘制调用的“着色参数包”** 抽象基类：它描述一个图元（Sprite 精灵、Text 文字或纯色多边形）以何种混合模式（`Blending`）、何种同帧顺序（`RenderOrder`）提交给 TwoDimension 绘制后端；具体视觉参数在 `SimpleMaterial`/`TextMaterial`/`PrimitivePolygonMaterial` 里，mod 几乎不直接 `new` 基类，而是经由 `Brush`→`Sprite` 间接得到，或自行构造具体子类去驱动 `TwoDimensionDrawContext`。

## 心智模型

把 `Material` 想成 **2D 世界的“材质”**：它和引擎层 3D 的 `TaleWorlds.Engine.Material`（那个 `sealed class Material : Resource`，带 shader flag 位运算、`GetFromResource`、`SetTexture(MBTextureType,...)`）不是同一套东西。TwoDimension 的 `Material` 非常轻——抽象基类只持有两个不可变字段：`Blending`（是否启用 alpha 混合）与 `RenderOrder`（同帧内绘制先后）。真正的“长相”全部在子类里：纹理、颜色因子、圆形遮罩、九宫格、叠加层、文字描边/发光/阴影等。`Material` 本身不持有 `Shader` 引用，也不做 shader flag 位运算；它更接近“把一批顶点 + 纹理按一组颜色/混合参数画出来”的指令。

它与 Gauntlet UI 的关系是间接但真实的：`Brush` 是一份可命名的视觉配方（精灵名、颜色、字体、图层），widget 在 `UpdateBrushes` 阶段把 `Brush` 解析成 `Sprite`；而 `Sprite` 的绘制最终落到 `SimpleMaterial` 这类 2D 材质上。典型内部链路是 `RichTextWidget` 拿到 `sprite.Texture` 后 `new SimpleMaterial(sprite.Texture)`，再每帧把 `Brush` 的 `GlobalColor`/`GlobalAlphaFactor` 同步进材质——也就是说，mod 在界面上看到的大部分精灵/文字着色，背后都是某个 `Material` 子类在工作。

### 生命周期

1. 通常由 TwoDimension 绘制层或具体 widget（如 `RichTextWidget`）在拿到 `Sprite`/`Texture` 后，用 `new SimpleMaterial(texture, renderOrder)` 或 `new TextMaterial(texture, renderOrder)` 构造；`PrimitivePolygonMaterial` 则由需要纯色多边形的代码（如启动器背景）以 `new PrimitivePolygonMaterial(color, renderOrder)` 构造。
2. 高频绘制场景通过 `MaterialPool<T>` 复用：每帧开始 `ResetAll()` 归还上一帧全部对象，绘制时 `New()` 取一个（命中则复用，未命中则 `new T()` 追加），避免每帧 `new` 造成的 GC 抖动。
3. 基类唯一构造入口是 `protected Material(bool blending, int renderOrder)`；它设置 `Blending` 与 `RenderOrder`，这两个属性是 `get; private set;`，构造后不可变——想改顺序或混合只能换一个不同参数构造的材质。
4. 绘制时材质连同几何/纹理坐标（`draw object`）一起交给 `TwoDimensionDrawContext.Draw(material, ref drawObject)`；材质负责“如何着色”，draw object 负责“画在哪、画多大”。
5. 帧末 `MaterialPool.ResetAll()` 把游标归零；池中的具体材质对象被复用而非立即回收，因此帧间不应长期持有池对象并假设其字段稳定。

## 何时用 / 何时不要用

**适合使用：**

- 需要自定义 2D 绘制（地图叠加、图表、自绘 HUD 元素、启动器背景）时，构造 `SimpleMaterial`/`TextMaterial`/`PrimitivePolygonMaterial` 并提交给 `TwoDimensionDrawContext`。
- 每帧大量绘制时，用 `MaterialPool<T>`（如 `MaterialPool<SimpleMaterial>`）复用材质对象，减少分配。
- 想按 `Sprite` 出图时，从 `sprite.Texture` 出发构造 `SimpleMaterial`，再按需要设 `ColorFactor`/`AlphaFactor`/`Color`。

**不要这样使用：**

- 不要 `new TaleWorlds.TwoDimension.Material()` 本身：它是 `abstract` 且构造器 `protected`，只能 `new` 具体子类。
- 不要长期持有从 `MaterialPool` 取出的对象并在帧间假设其字段不变：下一帧 `ResetAll`/`New` 会覆盖它们（`RichTextWidget` 虽按 `sprite.Texture` 缓存 `SimpleMaterial`，仍每帧把 `ColorFactor`/`AlphaFactor`/`Color` 同步回 `Brush` 的 `Global*` 值）。
- 不要混淆 `TaleWorlds.TwoDimension.Material`（abstract，2D）与 `TaleWorlds.Engine.Material`（sealed : Resource，3D，带 shader flag、`GetFromResource`、`SetTexture(MBTextureType,...)`）。两者命名空间、用途与获取方式都不同。
- 不要在后台线程构造/改写材质并立即交给绘制：2D 绘制发生在 UI 线程，跨线程改字段会竞态或静默不画。

## 依赖关系

```mermaid
graph TD
    SPRITE[Sprite / Texture] --> SIM[SimpleMaterial]
    BRUSH[Brush] --> SPRITE
    WIDGET[Widget.UpdateBrushes] --> BRUSH
    WIDGET --> RTW[RichTextWidget]
    RTW --> NEW[new SimpleMaterial(sprite.Texture)]
    NEW --> POOL[MaterialPool T New / ResetAll]
    POOL --> DRAW[TwoDimensionDrawContext.Draw]
    MAT[Material 抽象基类: Blending, RenderOrder] --> SIM
    MAT --> TM[TextMaterial]
    MAT --> PM[PrimitivePolygonMaterial]
    SIM --> DRAW
    TM --> DRAW
    PM --> DRAW
```

- 上游外观：[Brush](../Brush) 解析出 `Sprite`，widget 在 [Widget](../Widget) 的 `UpdateBrushes` 阶段消费；[Shader](../Shader) 与 [Texture](../Texture) 是更底层的绘制资源。
- 上层宿主：[GauntletLayer](../../engine/GauntletLayer) 提供 `UIContext` 与 TwoDimension 绘制后端，是材质最终被绘制所依赖的运行时。
- 数据侧：材质只反映外观，不持有战役/任务状态；需要随世界状态变色时，应在 [ViewModel](../../core-extra/ViewModel) 计算后改写 `Brush`/`Material` 副本。
- 崩溃面：参见 [崩溃与存档边界](../../../architecture/crash-boundaries) 的「UI 线程/生命周期」一节。

## 关键成员与调用时机

### 抽象基类 `Material`（来自 `TaleWorlds.TwoDimension/Material.cs`）

- `bool Blending { get; private set; }`：是否启用 alpha 混合。由 `protected` 构造器在创建时设定；绘制顺序/透明叠加依赖它。
- `int RenderOrder { get; private set; }`：同帧内的绘制先后（值小先画、值大后画，用于决定遮挡）。同样构造时设定，之后不可变。
- `protected Material(bool blending, int renderOrder)`：唯一构造入口；**所有具体子类必须** `base(blending, renderOrder)` 调用它。

### 具体子类 `SimpleMaterial`（精灵/纹理绘制，最常用）

- 构造器：`SimpleMaterial()`、`SimpleMaterial(Texture)`、`SimpleMaterial(Texture, int renderOrder)`、`SimpleMaterial(Texture, int renderOrder, bool blending)`。
- `Texture Texture`、`Color Color`、`float ColorFactor`/`AlphaFactor`/`HueFactor`/`SaturationFactor`/`ValueFactor`：纹理与 HSV/颜色调制；`ColorFactor=1`、`AlphaFactor=1`、`Color=White` 为默认。
- 圆形遮罩：`bool CircularMaskingEnabled`、`Vector2 CircularMaskingCenter`、`float CircularMaskingRadius`、`CircularMaskingSmoothingRadius`。
- 九宫格：`SpriteNinePatchParameters NinePatchParameters`（来自 `Sprite`，用于可拉伸边框）。
- 叠加层：`bool OverlayEnabled`、`Texture OverlayTexture`、`float OverlayTextureWidth/Height`、`OverlayXOffset`/`OverlayYOffset`、`Vector2 StartCoordinate`/`Size`、`float Scale`。
- `void Reset(Texture texture = null)`：把字段复位为默认（颜色因子归 1、颜色归白、关闭遮罩与叠加）；绘制系统每帧复用对象时常调用它。

### 具体子类 `TextMaterial`（文字绘制）

- 构造器同 `SimpleMaterial` 形态（`TextMaterial()` / `(Texture)` / `(Texture, int renderOrder)` / `(Texture, int renderOrder, bool blending)`）。
- 文字外观：`Color Color`、`float SmoothingConstant`、`bool Smooth`、`float ScaleFactor`、`Color GlowColor`/`OutlineColor`、`float OutlineAmount`/`GlowRadius`/`Blur`/`ShadowOffset`/`ShadowAngle`，以及 `ColorFactor`/`AlphaFactor`/`HueFactor`/`SaturationFactor`/`ValueFactor`。
- `void CopyFrom(TextMaterial sourceMaterial)`：把源材质参数整组复制过来（不是 `Clone`，但是运行期复用对象的常用手段）。

### 具体子类 `PrimitivePolygonMaterial`（纯色多边形）

- 构造器：`PrimitivePolygonMaterial(Color)`、`(Color, int renderOrder)`、`(Color, renderOrder, bool blending)`。
- `Color Color { get; private set; }`：多边形填充色，构造时设定后不可变。

### 复用池 `MaterialPool<T>`（高频绘制）

- `MaterialPool(int initialBufferSize)`：按初始容量建池。
- `T New()`：游标未满则复用已有对象，否则 `new T()` 追加；返回即可用于本帧绘制。
- `void ResetAll()`：游标归零，下一帧从头分配——**每帧绘制开始前调用**。

## 风险与崩溃边界

1. **不能 `new` 抽象基类**：直接 `new Material()` 编译不过；且基构造器 `protected`，只能 `new` 具体子类（`SimpleMaterial`/`TextMaterial`/`PrimitivePolygonMaterial`）。
2. **池对象被改写**：从 `MaterialPool` 取出的对象同帧会被复用；不要在帧之间保存引用并假设 `ColorFactor`/`AlphaFactor` 等字段不变——下一帧 `ResetAll`/`New` 会覆盖。
3. **跨线程绘制**：2D 绘制在 UI 线程；在后台线程构造/改写材质并交给 `TwoDimensionDrawContext.Draw` 会竞态或静默不画。
4. **命名空间混淆**：`TwoDimension.Material`（abstract，2D，仅 `Blending`/`RenderOrder`）与 `Engine.Material`（sealed : Resource，3D，有 `GetShaderFlags`/`AddMaterialShaderFlag`/`SetTexture(MBTextureType,...)`）不是同一套 API，获取与改参方式都不同，不要混用。
5. **`Blending`/`RenderOrder` 不可变**：构造后 `private set`；想改混合或顺序只能以不同参数重新构造一份材质。
6. **纹理生命周期**：`SimpleMaterial`/`TextMaterial` 直接引用 `Texture`；若 `Texture` 在材质仍被绘制时被释放或换掉，会画出空图或报错。确保 `Texture` 生命周期 ≥ 材质使用期。

## 真实示例

### 1.4.5：RichTextWidget 内部的真实获取路径

`TaleWorlds.GauntletUI.BaseTypes/RichTextWidget.cs:361` 展示了 mod 最常“遇到” `Material` 的地方——它按 `Sprite` 的纹理缓存 `SimpleMaterial`，再把 `Brush` 的全局色/透明度同步进去：

```csharp
// RichTextWidget.RenderImage 内部：sprite.Texture -> SimpleMaterial
if (!_textureMaterialDict.ContainsKey(sprite.Texture))
{
    _textureMaterialDict[sprite.Texture] = new SimpleMaterial(sprite.Texture);
}
SimpleMaterial simpleMaterial = _textureMaterialDict[sprite.Texture];
simpleMaterial.ColorFactor = base.ReadOnlyBrush.GlobalColorFactor;
simpleMaterial.AlphaFactor = base.ReadOnlyBrush.GlobalAlphaFactor * base.Context.ContextAlpha;
simpleMaterial.Color = base.ReadOnlyBrush.GlobalColor;
```

### 1.4.5：自定义 2D 绘制用 MaterialPool + SimpleMaterial

```csharp
// 在自定义 TwoDimension 绘制扩展里，UIContext 提供 TwoDimensionDrawContext
// 用 MaterialPool 复用每帧材质，避免 GC 抖动
MaterialPool<SimpleMaterial> pool = new MaterialPool<SimpleMaterial>(64);
pool.ResetAll();                       // 每帧开始：归还上一帧所有材质

SimpleMaterial mat = pool.New();       // 复用或新建一个 SimpleMaterial
mat.Reset(myTexture);                  // 复位为默认（ColorFactor=1, Color=白, 无遮罩）
mat.ColorFactor = 1f;
mat.AlphaFactor = alpha;
mat.Color = globalColor;               // 由 Brush.GlobalColor 之类同步而来
drawContext.Draw(mat, ref drawObject); // 连同几何提交给 2D 渲染后端
```

### 1.4.5：PrimitivePolygonMaterial 画纯色背景

```csharp
// TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs:73 用 PrimitivePolygonMaterial 画背景
PrimitivePolygonMaterial bg = new PrimitivePolygonMaterial(new Color(0.5f, 0.5f, 0.5f), 0);
drawContext.Draw(bg, ref backgroundDrawObject);
```

`Material`/`SimpleMaterial`/`TextMaterial`/`PrimitivePolygonMaterial`/`MaterialPool<T>` 均来自 `TaleWorlds.TwoDimension/Material.cs`、`SimpleMaterial.cs`、`TextMaterial.cs`、`PrimitivePolygonMaterial.cs`、`MaterialPool.cs`；`RichTextWidget` 的构造路径来自 `TaleWorlds.GauntletUI.BaseTypes/RichTextWidget.cs`。

## 版本注记

1.3.15 与 1.4.5 的 `TwoDimension.Material` 基类一致（仅 `Blending`/`RenderOrder` + `protected` 构造器），且具体子类 `SimpleMaterial`/`TextMaterial`/`PrimitivePolygonMaterial` 与 `MaterialPool<T>` 均存在。引擎层的 `TaleWorlds.Engine.Material` 是另一套（3D，`: Resource`），不要与本文混淆。若目标版本缺少某具体模块源码，仍应按 `Sprite/Texture → SimpleMaterial → TwoDimensionDrawContext.Draw` 与 `MaterialPool<T>` 复用关系接入，而不是假设某模块的自定义材质入口存在。

## 导航

- ↑ 父级：[gui 目录](../)
- ↔ 同级：[Brush](../Brush) · [Widget](../Widget) · [ScreenManager](../ScreenManager) · [Shader](../Shader) · [Texture](../Texture)
- 上游：[GauntletLayer](../../engine/GauntletLayer)
- 下游：材质由绘制层产生，经 [Brush](../Brush) 与 [Widget](../Widget) 间接消费
- 相关：[ViewModel](../../core-extra/ViewModel) · [崩溃与存档边界](../../../architecture/crash-boundaries) · [Shader](../Shader) · [Texture](../Texture)

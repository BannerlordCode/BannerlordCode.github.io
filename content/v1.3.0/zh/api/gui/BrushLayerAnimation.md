---
title: "BrushLayerAnimation"
description: "单个图层的动画轨道集合：LayerName + 一个 MBReadOnlyList<BrushAnimationProperty>；唯一的移除方法 RemoveAnimationProperty 是 internal，外部代码只能加不能删——外部删除必须走宿主 BrushAnimation.RemoveAnimationProperty。"
---

# BrushLayerAnimation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushLayerAnimation`
**Base:** 无（隐式 `System.Object`；不实现任何接口）
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayerAnimation.cs`（全文 66 行）

## 概述

`BrushLayerAnimation` 是「某一个图层上的全部动画轨道」的容器。它是 [BrushAnimation](../BrushAnimation) 私有字典 `_data` 的 value，也是 `StyleAnimation` 字段的类型——**两种角色用的是同一个类**。全文 66 行，公开成员只有四项：

| 成员 | 位置 | 说明 |
| --- | --- | --- |
| `LayerName` | `:12` | 层名。**由 [BrushAnimation](../BrushAnimation) 在创建时写入**（`brushLayerAnimation.LayerName = property.LayerName;`）。`StyleAnimation` 那一份**永远是 null**。 |
| `Collections` | `:16` | `MBReadOnlyList<BrushAnimationProperty>`，getter 直接 `return this._collections;`。 |
| 构造函数 | `:25` | `this.LayerName = null; this._collections = new MBList<BrushAnimationProperty>();` |
| `AddAnimationProperty` | `:38` | `this._collections.Add(property);` 一行，无判空、无重复检查。 |
| `RemoveAnimationProperty` | `:32` | **`internal void`**，方法体 `this._collections.Remove(property);` |
| `Clone` | `:56` | 深拷贝：`new BrushLayerAnimation()` + 私有 `FillFrom`。 |

**`RemoveAnimationProperty` 是 `internal`，这是本类最需要记住的一件事。** 外部 mod 代码拿不到它——`internal` 只对 `TaleWorlds.GauntletUI` 这个程序集内的代码可见。所以「从一条图层动画里删掉某条轨道」这件事，外部**唯一**的路径是调 [BrushAnimation](../BrushAnimation) 的 `public void RemoveAnimationProperty(BrushAnimationProperty property)`，由它按 `LayerName` 找到正确的那个 `BrushLayerAnimation` 再调内部方法。

## 心智模型

**把它看成「一个图层上的轨道盒」，而轨道盒只有宿主能拆。**

层级关系是三层：

```
[BrushAnimation](../BrushAnimation)
├── StyleAnimation : BrushLayerAnimation          ← 无 LayerName 的轨道，LayerName 恒 null
└── _data : Dictionary<string, BrushLayerAnimation> ← 每个键一个，键 == LayerName == value.LayerName
```

[BrushAnimation](../BrushAnimation) 的 `AddAnimationProperty` 是唯一往这里塞东西的地方（`:46`）：`LayerName` 为空 ⇒ 走 `StyleAnimation`；否则查 `_data`，查不到就 `new BrushLayerAnimation()` 并把 `LayerName` 一起设好再 `_data.Add`。

读的时候 [BrushRenderer](../BrushRenderer) 每帧对每个样式层做一次 `animation.GetLayerAnimation(styleLayer.Name)`——**返回 null 是完全正常的**（该层没有动画），渲染器随即走「不插值、直接用源值」的路径。所以 `Collections` 为空的 `BrushLayerAnimation` 与 null 在渲染结果上没有区别，只是多一次字典查询。

`Collections` 返回的是 `MBReadOnlyList<T>`（`TaleWorlds.Library` 里的类型），getter 直接把内部的 `MBList` 交出去——**不新建包装**。这跟 [BrushAnimationProperty](../BrushAnimationProperty) 的 `KeyFrames`（每次 `AsReadOnly()` 新建一个包装）不同。这里的含义是：**这个「只读列表」是内部列表的实时视图**，内部一变，外部持有的引用立刻跟着变。遍历时如果内部同时被改（比如你在 `foreach` 里调 `AddAnimationProperty`），`MBList` 的行为由 `TaleWorlds.Library` 决定，别赌它。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public BrushLayerAnimation()`（`:25`） | `LayerName = null` + `new MBList<BrushAnimationProperty>()`。**直接 `new` 出来的实例 `LayerName` 是 null**，它就等价于一个 `StyleAnimation`；放进 [BrushAnimation](../BrushAnimation) 的 `_data` 不会被它接受（除非你同时设了 `LayerName` 且那个键存在）。 |
| `LayerName` | `public string LayerName { get; set; }`（`:12`） | 层名。`StyleAnimation` 那份永远是 null（构造器设的默认值，`AddAnimationProperty` 的 null 分支不会再改它）。`_data` 那份由 [BrushAnimation](../BrushAnimation) 在首次创建时写入。**`Clone` 会复制它**（`FillFrom` 第一行）。 |
| `Collections` | `public MBReadOnlyList<BrushAnimationProperty> Collections { get; }`（`:16`） | 轨道列表的**实时只读视图**，getter 直接返回内部 `MBList`，不新建包装。渲染器 `foreach (BrushAnimationProperty p in layerAnimation.Collections)` 就是遍历它。**空列表与 null 在渲染结果上等价**。 |
| `AddAnimationProperty` | `public void AddAnimationProperty(BrushAnimationProperty property)`（`:38`） | 单行 `this._collections.Add(property);`。**不判空、不查重**。传 null 会在 `MBList.Add` 里出问题；重复添加同一个 [BrushAnimationProperty](../BrushAnimationProperty) 对象会让它被遍历两次、产生两次插值写。 |
| `RemoveAnimationProperty` | `internal void RemoveAnimationProperty(BrushAnimationProperty property)`（`:32`） | **单行 `this._collections.Remove(property);`，且是 `internal`**——外部 mod 代码**无法调用**。唯一调用点是 [BrushAnimation](../BrushAnimation) 的 `RemoveAnimationProperty`（`:67`）。`MBList.Remove` 按 `EqualityComparer<T>.Default` 比对，而 [BrushAnimationProperty](../BrushAnimationProperty) 没重写 `Equals`，所以实际是引用比较：传克隆体删不掉原对象。 |
| `Clone` | `public BrushLayerAnimation Clone()`（`:56`） | `new BrushLayerAnimation()` + 私有 `FillFrom(this)`。深拷贝 `LayerName` 与每一条轨道（每条 `BrushAnimationProperty.Clone()`）。被 [BrushAnimation](../BrushAnimation) 的 `FillFrom` 调用，所以 [Brush](../Brush) 克隆出来的动画与原动画**无共享轨道对象**。 |
| `FillFrom` | `private void FillFrom(BrushLayerAnimation brushLayerAnimation)`（`:44`） | 私有，只被 `Clone` 调。`LayerName` 直接赋值，轨道列表逐条 `Clone()` 后加入。 |

## 真实示例

**一、通过宿主添加（外部代码唯一正确的加法路径）**——注意必须传 `LayerName`，否则会被收进 `StyleAnimation`：

```csharp
private static void AddLayerTrack(BrushAnimation animation, string layerName)
{
    BrushAnimationProperty track = new BrushAnimationProperty();
    track.PropertyType = BrushAnimationProperty.BrushAnimationPropertyType.AlphaFactor;
    track.LayerName = layerName;

    BrushAnimationKeyFrame start = new BrushAnimationKeyFrame();
    start.InitializeAsFloat(0f, 1f);
    track.AddKeyFrame(start);

    BrushAnimationKeyFrame end = new BrushAnimationKeyFrame();
    end.InitializeAsFloat(0.5f, 0f);
    track.AddKeyFrame(end);

    animation.AddAnimationProperty(track);

    BrushLayerAnimation box = animation.GetLayerAnimation(layerName);
    if (box != null)
    {
        // Collections 是实时视图，直接读
        int trackCount = box.Collections.Count;
        brushTrackCount = trackCount;
    }
}
```

**二、通过宿主删除**（外部调不到 `BrushLayerAnimation.RemoveAnimationProperty`，只能走这里）：

```csharp
private static void RemoveTrack(BrushAnimation animation, BrushAnimationProperty track)
{
    animation.RemoveAnimationProperty(track);
}

private static int CountLayerTracks(BrushAnimation animation, string layerName)
{
    BrushLayerAnimation box = animation.GetLayerAnimation(layerName);
    if (box == null) { return 0; }
    return box.Collections.Count;
}
```

**三、克隆一段图层动画（深拷贝，轨道对象不共享）**：

```csharp
private static BrushLayerAnimation CopyLayerAnimation(BrushAnimation source, string layerName)
{
    BrushLayerAnimation original = source.GetLayerAnimation(layerName);
    if (original == null) { return null; }

    BrushLayerAnimation copy = original.Clone();
    foreach (BrushAnimationProperty track in copy.Collections)
    {
        track.LayerName = layerName;
    }
    return copy;
}
```

最后这个 `track.LayerName = layerName` 不是多余的：[BrushAnimationProperty](../BrushAnimationProperty) 的 `Clone` **不复制 `LayerName`**（它的私有 `FillFrom` 只拷 `PropertyType` 与帧列表），所以克隆出来的轨道 `LayerName` 是 null。把它们塞回任何 `BrushAnimation` 都会被当成 brush 级轨道。

## 风险与边界

- **`RemoveAnimationProperty` 是 `internal`，外部调不到。** 这不是疏漏而是刻意的封装：删除必须经过 [BrushAnimation](../BrushAnimation)，因为宿主还负责「删空之后把这一项从 `_data` 里摘掉」这段逻辑。绕过宿主的直接后果就是那个清理不会发生。
- **`AddAnimationProperty` 不查重。** 同一个 [BrushAnimationProperty](../BrushAnimationProperty) 实例加两次 → `Collections` 里有两条相同引用 → 渲染器每帧对它插值两次并写两次（对 float 是幂等的，对 Sprite 的硬切换也是幂等的，但纯属浪费）。**每次都新建对象。**
- **`Collections` 是实时视图，不是快照。** 它返回的就是内部 `MBList`。外部持有它之后内部一变（比如 [BrushAnimation](../BrushAnimation) 的 `FillFrom` 重建了 `_data`），旧引用会指向**已被丢弃的那个旧列表**——不会崩，但读到的数据已经过时。
- **`Collections` 是 `MBReadOnlyList<T>` 而非 `IReadOnlyList<T>`。** 它来自 `TaleWorlds.Library`，如果你的项目没引用那个程序集就得加引用。
- **`new BrushLayerAnimation()` 的 `LayerName` 是 null。** 直接 new 出来加轨道，等价于创建一个「无名图层动画」——放进 [BrushAnimation](../BrushAnimation) 会走 `StyleAnimation` 分支而不是 `_data`。**要图层级动画，必须让 [BrushAnimation](../BrushAnimation) 来 new，它会替你设 `LayerName`。**
- **`LayerName` 可写且无校验。** 改它不会同步 `_data` 的键。改完之后 `GetLayerAnimation(旧名)` 与 `GetLayerAnimation(新名)` 的行为会脱节——前者还查得到（键没变），后者查不到。**建好就别改。**
- **`Clone` 之后每条轨道的 `LayerName` 丢失。** 见上，因为 `BrushAnimationProperty.Clone` 不拷它。所以 `BrushLayerAnimation.Clone()` 的产物**不能直接**塞进 `BrushAnimation.AddAnimationProperty` 而不补 `LayerName`。
- **空 `Collections` 与 null 渲染效果相同但语义不同。** [BrushAnimation](../BrushAnimation) 的 `RemoveAnimationProperty` 在集合变空时会从 `_data` 摘键——但只有 `LayerName` 非空的那一路。空串那一路执行的 `this._data.Remove("")` 是无效操作，于是 `StyleAnimation` 会永远持有一个空的 `BrushLayerAnimation`。渲染上无差别，但 `if (animation.StyleAnimation != null)` 这类判断会变真。

## 跨版本提示

五棵源码树（`1.3.0` / `1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）的 public/protected 签名集合比对：**7 条签名，增减均为 0**。字节哈希 `a526f646` → `0d942c75` → `b3cf14e3` → `bd4bd913`，四组互异，说明实现体改过（很可能是反编译产物格式差异）但公开形状从 1.3 到 1.5 一次没变。

**结论：不需要为这个类写版本分支。** 需要留意的是宿主 [BrushAnimation](../BrushAnimation) 与 [BrushAnimationProperty](../BrushAnimationProperty) ——它们的签名同样是零变化，所以整条链在跨版本时都是稳定的。唯一的方向性变化仍在 [BrushLayer](../BrushLayer)（1.3.15 起 +3 个 `ImageFit` 公有字段），那影响的是「有哪些属性可以进轨道」，不影响本类的存取协议。

## 依赖关系

- 宿主：[BrushAnimation](../BrushAnimation) 的 `StyleAnimation` 字段与私有 `_data` 字典，`AddAnimationProperty` / `RemoveAnimationProperty` / `GetLayerAnimation` / `GetLayerAnimations` 四个 public 方法都是它的入口
- 元素：[BrushAnimationProperty](../BrushAnimationProperty)，其 `PropertyType` 是 [BrushAnimationPropertyType](../BrushAnimationPropertyType)，帧是 [BrushAnimationKeyFrame](../BrushAnimationKeyFrame)
- 列表类型：`TaleWorlds.Library.MBList<T>` 与 `TaleWorlds.Library.MBReadOnlyList<T>`
- 消费者：[BrushRenderer](../BrushRenderer) 的 `AnimateBrushLayerState`——拿到本对象后 `foreach (BrushAnimationProperty p in layerAnimation.Collections)`，把结果写进 [BrushLayerState](../BrushLayerState)
- 风格对照：[BrushAnimation](../BrushAnimation) 的 `StyleAnimation` 用的也是本类，所以「brush 级动画」和「图层级动画」在数据结构上完全同构，差别只在 `LayerName` 是否为空
- 桶首页：[gui API 分区](../)
---
title: "PrefabTooltipExtension"
description: "给 widget prefab 加 Hint 属性的 prefab 扩展：七个 override 里六个是空壳，只有 RegisterAttributeTypes 与 AfterAttributesSet 真的干活。Hint 自定义类型缺失时在 WidgetInstantiationResult.Template 上直接 NRE。"
---

# PrefabTooltipExtension

**Namespace:** TaleWorlds.GauntletUI.TooltipExtensions
**Module:** TaleWorlds.GauntletUI
**Type:** `public class PrefabTooltipExtension : PrefabExtension`
**Base:** `PrefabExtension`（→ `../../gui/PrefabExtension`）
**File:** `TaleWorlds.GauntletUI.TooltipExtensions/PrefabTooltipExtension.cs`（100 行）

## 概述

它给 GauntletUI 的 prefab 系统**追加了一个 XML 属性名 `Hint`**，并让任何带 `Hint="..."` 的 widget 在实例化时被自动挂上一个 tooltip 子树。你在 XML 里写 `Hint="Click to trade"`，运行期那个 widget 就多一个 `TooltipExtensionWidget` 子节点 + 一个名为 `Hint` 的自定义类型实例。

七个 override 里，**只有两个有内容**：

| override | 行号 | 内容 |
| --- | --- | --- |
| `RegisterAttributeTypes` | `:18` | `widgetAttributeContext.RegisterKeyType(new WidgetAttributeKeyTypeHint())` —— 一行 |
| `AfterAttributesSet` | `:52` | 真正的注入逻辑，见下 |
| `OnWidgetCreated` | `:24` | **空 `{ }`** |
| `OnSave` | `:30` | **空 `{ }`** |
| `OnAttributesSet` | `:36` | **空 `{ }`** |
| `DoLoading` | `:42` | **空 `{ }`** |
| `OnLoadingFinished` | `:48` | **空 `{ }`** |
| `GetHint`（private static） | `:13` | `widgetTemplate.GetFirstAttributeIfExist<WidgetAttributeKeyTypeHint>()` |

`AfterAttributesSet` 的执行顺序（`:52`–`:100`）：

1. `:54` 读 `hint = GetHint(widgetInstantiationResult.Template)`；为 `null` 就跳过整段（但仍递归子节点）
2. `:59` `widgetCreationData.GetExtensionData<GauntletMovie>()` 拿电影数据
3. `:63` `widgetFactory.GetCustomType("Hint")` —— **按名字找自定义类型，没有 null 检查**
4. `:64` `new TooltipExtensionWidget(context)`，`:65` `widget.AddChild(tooltipExtensionWidget)`
5. `:66-78` **仅当 `extensionData != null`**：把两个 SizePolicy 设为 `CoverChildren`、`IsEnabled = false`，然后 `new GauntletView(extensionData, component, tooltipExtensionWidget, 64)` 同时 `component.AddChild` 与 `tooltipExtensionWidget.AddComponent`（同一个 view 双挂）
6. `:80` 新建一个 `WidgetCreationData(context, widgetFactory, tooltipExtensionWidget)`
7. `:84-96` 用一个**手写的 `Dictionary<string, WidgetAttributeTemplate>`**（只有 `HintText` 一个键，`KeyType` 是 `WidgetAttributeKeyTypeAttribute`）调 `customType.Instantiate(...)`
8. `:97-100` 递归：`foreach (var child in widgetInstantiationResult.Children) this.AfterAttributesSet(...)`

## 心智模型

**把它当成「XML 预处理钩子」而不是「运行时组件」。** `PrefabExtension` 基类（`TaleWorlds.GauntletUI.PrefabSystem/PrefabExtension.cs`）有 7 个 `protected internal virtual` 方法，**每个的默认实现体都是空的**。框架在四个不同时机遍历 `PrefabExtensionContext.PrefabExtensions` 并逐个回调：

- `RegisterAttributeTypes` 在**属性解析前**——所以你能注册新的属性名
- `OnAttributesSet` / `AfterAttributesSet` 在**每个 widget 属性设完**时（这就是为什么本类能逐节点注入子树）
- `DoLoading` / `OnLoadingFinished` 在 **prefab 文件加载**时（`WidgetPrefab.LoadFrom`，`WidgetPrefab.cs:393` 附近遍历）
- `OnWidgetCreated` 在**创建后**，`OnSave` 在**存 prefab 时**

本类把全部行为压在 `AfterAttributesSet` 这一个钩子上，因为它要的不是「加载期元数据」，而是「实例化期生成子树」。

三条心智模型要点：

**一、`Hint` 属性名是被 `WidgetAttributeKeyTypeHint` 认领的。** 那个类（`TaleWorlds.GauntletUI.TooltipExtensions/WidgetAttributeKeyTypeHint.cs`）的三个方法全部 `return ... "Hint";`：`CheckKeyType(key)` 只在 `key == "Hint"` 时 true，`GetKeyName` 和 `GetSerializedKey` 也都返回常量 `"Hint"`。**它是一个写死名字的单值属性类型**——没有前缀、没有命名空间隔离，改不了。

**二、注入是「深度优先、自递归」的。** `:97` 直接调用 `this.AfterAttributesSet(...)` 而不是走框架的分发循环。这意味着**这一层的其他 `PrefabExtension` 不会被再次回调**（框架那次循环还在外层），也意味着新增的 `TooltipExtensionWidget` 子树不在 `widgetInstantiationResult.Children` 快照里，不会无限递归。

**三、tooltip 的显隐由 `TooltipExtensionWidget` 自己管，不由本类管。** 本类只负责「搭出骨架 + 塞数据」。真正在 hover 时把 tooltip 显示出来的逻辑在 `TooltipExtensionWidget.OnConnectedToRoot`（订阅 `ParentWidget.EventFire`）与 `UpdateTooltip(bool)` 里：它把 `TooltipWidget.IsVisible = false`（即 `Children[0]`），然后在 `HoverBegin` / `HoverEnd` 事件里翻这个开关。

## 关键成员

| 成员 | 签名（行号） | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetHint` | `private static WidgetAttributeTemplate GetHint(WidgetTemplate widgetTemplate)`（`:13`） | 一行包装 `GetFirstAttributeIfExist<WidgetAttributeKeyTypeHint>()`。**返回的是模板上第一个匹配项，多个 `Hint` 属性只取第一个**。入参没有 null 检查。 |
| `RegisterAttributeTypes` | `protected override void RegisterAttributeTypes(WidgetAttributeContext widgetAttributeContext)`（`:18`） | 唯一让 `Hint` 这个属性名「合法」的钩子。**只在这一刻注册的属性名能被解析**，而这一时刻每个 prefab factory 只发生一次（`WidgetFactory.cs:53` 附近遍历 extensions）。 |
| `AfterAttributesSet` | `protected override void AfterAttributesSet(WidgetCreationData, WidgetInstantiationResult, Dictionary<string, WidgetAttributeTemplate>)`（`:52`） | 全部实质逻辑 + 尾部自递归。**第三个参数 `parameters` 传进去又传给递归，自己从不读它。** |
| `OnWidgetCreated` / `OnSave` / `OnAttributesSet` / `DoLoading` / `OnLoadingFinished` | `:24` / `:30` / `:36` / `:42` / `:48` | 全是 `{ }`。它们**连 `base.Xxx()` 都没调**——基类也是空的，所以行为等价于「什么都不做」。 |
| （`TooltipExtensionWidget` 上的成员，本类不直接暴露） | `WidthSizePolicy` / `HeightSizePolicy` 设为 `CoverChildren`、`IsEnabled = false`（`:71`–`:73`） | **只在 `extensionData != null` 时才设**。没有电影数据的 prefab（比如在编辑器/代码生成阶段实例化）里，这个 widget 的 SizePolicy 保持默认。 |
| （`GauntletView` 的第 4 参） | `new GauntletView(extensionData, component, tooltipExtensionWidget, 64)`（`:76`） | 那个 `64` 是 `GauntletView` 的缓存深度/宽度参数，**硬编码**，不可配。 |

## 真实示例

在 prefab XML 里给任意 widget 挂 tooltip，这就是这个扩展的全部用法：

```xml
<Widget Source="..\Widgets\Button\Button.widget" Target="TradeButton">
  <Hint>Clicks to open the trade screen</Hint>
</Widget>
```

代码侧，如果你要写自己的 `PrefabExtension` 并理解钩子的时序，可参照本类的 `RegisterAttributeTypes` + 尾部递归。注意 `WidgetAttributeKeyType` 的三个方法**全是 `abstract`**（`TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeKeyType.cs`），子类必须把三个都写出来，不能只覆写一个：

```csharp
using System.Collections.Generic;
using TaleWorlds.GauntletUI.BaseTypes;
using TaleWorlds.GauntletUI.Data;
using TaleWorlds.GauntletUI.PrefabSystem;

// 阶段 0：声明你要认领的属性名。
// 引擎其他地方完全不知道「Countdown」的存在，它的存在只靠下面这个类型 + RegisterAttributeTypes。
public class WidgetAttributeKeyTypeCountdown : WidgetAttributeKeyType
{
    public override bool CheckKeyType(string key)     { return key == "Countdown"; }
    public override string GetKeyName(string key)     { return "Countdown"; }
    public override string GetSerializedKey(string key) { return "Countdown"; }
}

public class MyCountdownExtension : PrefabExtension
{
    // 阶段 1：加载期，注册一个自己的属性名。
    // 只有在这一刻注册的名字能被 XML 解析器接受，而每个 prefab factory 只发生一次。
    protected override void RegisterAttributeTypes(WidgetAttributeContext widgetAttributeContext)
    {
        widgetAttributeContext.RegisterKeyType(new WidgetAttributeKeyTypeCountdown());
    }

    // 阶段 2：实例化期，逐节点处理（含子节点）。
    // parameters 这个参数本类从不读，但基类签名要求它。
    protected override void AfterAttributesSet(
        WidgetCreationData widgetCreationData,
        WidgetInstantiationResult widgetInstantiationResult,
        Dictionary<string, WidgetAttributeTemplate> parameters)
    {
        WidgetAttributeTemplate countdown =
            widgetInstantiationResult.Template.GetFirstAttributeIfExist<WidgetAttributeKeyTypeCountdown>();
        if (countdown != null)
        {
            // 在这里注入自己的子树 / 组件
            // （本类 PrefabTooltipExtension 注入的是 TooltipExtensionWidget + GauntletView）
        }

        foreach (WidgetInstantiationResult child in widgetInstantiationResult.Children)
        {
            AfterAttributesSet(widgetCreationData, child, parameters);   // 注意：直调自身，不是走框架分发
        }
    }
}
```

运行时查一个已经被扩展过的 widget（tooltip 子树被 `AddChild` 挂在原 widget 的**最后一个位置**）：

```csharp
using TaleWorlds.GauntletUI.BaseTypes;
using TaleWorlds.GauntletUI.TooltipExtensions;

// 在你自己的 ViewModel/Controller 里
Widget lastChild = someWidget.Children.Count > 0 ? someWidget.Children[someWidget.Children.Count - 1] : null;
TooltipExtensionWidget holder = lastChild as TooltipExtensionWidget;
if (holder != null)
{
    Widget tooltipRoot = holder.TooltipWidget;   // TooltipWidget 就是 Children[0]
    tooltipRoot.IsVisible = false;               // 正常应交给 HoverBegin/HoverEnd
}
```

## 风险与边界

- **五个 override 是空壳。** `OnWidgetCreated` / `OnSave` / `OnAttributesSet` / `DoLoading` / `OnLoadingFinished` 的方法体就是 `{ }`，连 `base` 都不调。想扩展保存/加载行为必须另写一个 `PrefabExtension` 子类——**不能靠继承本类再 override 拿到有意义的行为**（继承可以，但要用到的钩子得自己全部实现）。
- **`GetCustomType("Hint")` 没有 null 检查。** `:63` 拿到的 `customType` 直接在 `:85` 被 `.Instantiate(...)`。如果 prefab 搜索路径里没有名为 `Hint` 的自定义类型（或者你的 mod 覆盖了 prefab 路径导致它找不到），这里**直接 NRE**，异常点在 `AfterAttributesSet` 里，栈很浅但定位不难。
- **`TooltipExtensionWidget.OnConnectedToRoot` 同样没有 null 检查。** 那个文件里 `this.TooltipWidget.IsVisible = false;`（`TooltipExtensionWidget.cs` 的 `OnConnectedToRoot`）而 `TooltipWidget` 是 `Children.Count > 0 ? Children[0] : null`。**如果 `Hint` 类型实例化出一个没有子节点的 widget，连上根时会 NRE。** 也就是说「Hint prefab 结构不对」这个错误比「找不到 Hint prefab」报得更晚也更难认。
- **`extensionData == null` 时静默降级。** `:66` 之后的一整段（SizePolicy、`IsEnabled = false`、`GauntletView`）都在 `if (extensionData != null)` 里。没有电影上下文时（例如在 widget 编辑器、或者 `GauntletView` 还没创建的场景下），tooltip 树照样搭，但**没有数据绑定**——hover 出来是空的。这不是异常，是「看起来什么都没发生」。
- **`component` 可能为 null 而没有检查。** `:69` `widget.GetComponent<GauntletView>()` 的结果直接传给 `:76` 的 `new GauntletView(extensionData, component, ...)`。没有 `GauntletView` 组件的裸 widget 会把 null 传进去。
- **`HintText` 属性的 `ValueType` 是从源 `Hint` 属性抄来的**（`:92` `ValueType = hint.ValueType`），`KeyType` 换成了通用的 `WidgetAttributeKeyTypeAttribute`。所以 `Hint="..."` 的值能被原样搬进 `HintText`，**但如果 `Hint` 用了绑定语法（如 `Hint="@MyVM.Foo"`），`ValueType` 会是 binding 类型，搬到 `HintText` 后是否被正确解析取决于 prefab 里 `HintText` 的声明方式**——这条路径没有测试保护。
- **`AfterAttributesSet` 的第三个参数 `parameters` 从不被读。** 它被原样传给递归调用。基类签名要求它，但本类没有用——这也意味着**它无法知道「这个属性是写在第几层的」**，想按深度做差异化处理做不到。
- **`Hint` 是一次性的、全局的。** `WidgetAttributeKeyTypeHint` 三个方法都写死 `"Hint"`，所以**你不能写第二个以 `Hint` 开头或结尾的属性名**（`CheckKeyType` 用的是精确 `==`，但引擎里其他属性名注册冲突时行为未定义）。
- **本类不做保存。** `OnSave` 是空的，所以 prefab 编辑器保存时**不会把注入的 tooltip 子树写回 XML**——它是纯运行期产物。这是对的，但也意味着**不要指望在 XML 里看到 tooltip 节点**。

## 跨版本提示

- **本类型只在 1.3.0 这一棵树里存在。** 在 1.3.15 / 1.4.5 / 1.4.6 / 1.4.7 / 1.5.3 五棵源码树里，`PrefabTooltipExtension.cs` 这个文件**完全不存在**（不是路径变了——是 `find` 在 `TaleWorlds.GauntletUI.TooltipExtensions/` 下已经找不到任何文件）。同目录的兄弟类型 `TooltipExtensionWidget` 与 `WidgetAttributeKeyTypeHint` 也一并消失。
- **对 mod 的实际含义：这是 1.3.x 专属的 API，不要在它上面建立依赖。** 1.3.0 的 prefab XML 里的 `Hint="..."` 属性在更高版本不会再被识别——要么被静默忽略（属性名未注册，`WidgetAttributeContext` 找不到对应 KeyType），要么直接报 XML 属性未知，两种都不会有兼容层。
- **如果你要在 1.4+/1.5 上做 tooltip，正确路线是自己写一个 `PrefabExtension` 子类**（基类 `PrefabExtension` 与 `RegisterAttributeTypes` / `AfterAttributesSet` 这套钩子在更高版本仍然是公开面），把你需要的注入逻辑迁过去，而不是试图找 `PrefabTooltipExtension` 的新位置。
- `AfterAttributesSet` 的签名在 1.3.0 是 3 参数，本页没有更高版本的源码可比对（文件不存在），所以「签名有没有变」这个问题在这批树上无法用数据回答——按「文件都没了」处理更安全。

## 依赖关系

- 基类：[PrefabExtension](../../gui/PrefabExtension)（`TaleWorlds.GauntletUI.PrefabSystem`），7 个钩子的默认实现全空
- 属性类型：[WidgetAttributeKeyTypeHint](../WidgetAttributeKeyTypeHint)（同桶），它的 `CheckKeyType` / `GetKeyName` / `GetSerializedKey` 三个方法全部返回常量 `"Hint"`
- 被注入的 widget：[TooltipExtensionWidget](../TooltipExtensionWidget)（同桶），负责 hover 显隐与 `OnPreviewMousePressed` 等一串返回 `false` 的事件屏蔽
- 扩展点宿主：[WidgetPrefab](../../gui/WidgetPrefab) 的 `LoadFrom`、[WidgetTemplate](../../gui/WidgetTemplate) 的实例化路径；注册入口是 `PrefabExtensionContext.AddExtension`（`UIResourceManager` 在初始化时只加了一个 `PrefabDatabindingExtension`，这个类在本仓库 `api/` 下没有页面）
- 数据绑定：[GauntletView](../../gui/GauntletView) 与 [GauntletMovie](../../gui/GauntletMovie)
- 桶首页：[campaign-ext API 分区](../)

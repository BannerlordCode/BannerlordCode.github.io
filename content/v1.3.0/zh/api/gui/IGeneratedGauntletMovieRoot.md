---
title: "IGeneratedGauntletMovieRoot"
description: "IGeneratedGauntletMovieRoot 的自动生成类参考。"
---
# IGeneratedGauntletMovieRoot

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public interface IGeneratedGauntletMovieRoot`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.Data/IGeneratedGauntletMovieRoot.cs`

## 概述

`IGeneratedGauntletMovieRoot` 是 GauntletUI 代码生成器给**电影根预制件**（root prefab）额外加的一个两方法接口，声明在 `TaleWorlds.GauntletUI.Data`（`IGeneratedGauntletMovieRoot.cs:6`）。它只有两个成员：`DestroyDataSource()`（`IGeneratedGauntletMovieRoot.cs:9`）和 `RefreshBindingWithChildren()`（`IGeneratedGauntletMovieRoot.cs:12`）。你几乎不会手写它。

它是被**生成**出来的。代码生成器只在 `WidgetTemplateGenerateContextType == RootPrefab` 时才把这个接口加进生成的类：`classCode.InheritedInterfaces.Add("TaleWorlds.GauntletUI.Data.IGeneratedGauntletMovieRoot")`（`UICodeGenerationDatabindingVariantExtension.cs:1330`），紧跟着才生成 `RefreshBindingWithChildren`（`UICodeGenerationDatabindingVariantExtension.cs:1331`）。而 `DestroyDataSource` 是**无条件**生成的（`UICodeGenerationDatabindingVariantExtension.cs:1333`）。这个不对称正是接口存在的原因：普通的子控件也需要销毁数据源，但只有根控件需要整树刷新。

唯一的使用方是 `GeneratedGauntletMovie`（`GeneratedGauntletMovie.cs:9`）。它的构造函数把传入的根 `Widget` 硬转成这个接口：`this._root = (IGeneratedGauntletMovieRoot)rootWidget;`（`GeneratedGauntletMovie.cs:37`）。`Release()` 会调 `this._root.DestroyDataSource()`（`GeneratedGauntletMovie.cs:60`），`RefreshBindingWithChildren()` 则直接转发给 `_root`（`GeneratedGauntletMovie.cs:68`）。

## 心智模型

把它当成**“生成器与运行时之间的一层窄接口”**：它的两个方法分别回答两个问题——*怎么把这棵绑定树拆干净*，和 *怎么在不重建 UI 的前提下把新值重新推下去*。

生成出来的 `RefreshBindingWithChildren` 并不是“刷新”，而是**先拆后装**，方法体只有三行（`UICodeGenerationDatabindingVariantExtension.cs:167`）：

```
var dataSource = _datasource_Root;
this.SetDataSource(null);
this.SetDataSource(dataSource);
```

也就是说它靠把根数据源置空再重新赋值，强迫整棵控件树重新跑一遍绑定。`GeneratedGauntletMovie.OnResourcesRefreshed` 正是这么用的：先 `Context.RefreshResources(...)`（`GeneratedGauntletMovie.cs:74`），然后调 `RefreshBindingWithChildren()`（`GeneratedGauntletMovie.cs:75`）。这就是切换语言或重载字体资源后，已有界面文本能变的原因。顺带一提：`SetDataSource` 不是 `Widget` 的成员，它是生成器额外发射的方法，所以手写根控件时不能直接调它。

生成的 `DestroyDataSource` 则沿着绑定路径逐个往下调子控件的同名方法（`UICodeGenerationDatabindingVariantExtension.cs:191`），并且当预制件继承了另一个预制件时，方法体第一行是 `base.DestroyDataSource();`（`UICodeGenerationDatabindingVariantExtension.cs:151`）——不漏父类。

由此得到几条硬边界：

- **硬转没有判空。** `GeneratedGauntletMovie.cs:37` 是裸 `(IGeneratedGauntletMovieRoot)rootWidget`。如果这个预制件的根 widget 解析出来的类不是“根预制件”生成的（也就没实现这个接口），你拿到的是构造时的 `InvalidCastException`，而不是一个可以判空的 null。
- **接口不是你实现行为的扩展点。** 生成器在 `RootPrefab` 之外不会加这个接口（`UICodeGenerationDatabindingVariantExtension.cs:1329`）。一个手写的根 widget 类想被 `GeneratedGauntletMovie` 当作根使用，必须自己 `implement IGeneratedGauntletMovieRoot` 并提供这两个方法；否则它在 `GeneratedGauntletMovie.cs:37` 就炸。
- **`DestroyDataSource` 的调用时机不在你手里。** 它由 `GeneratedGauntletMovie.Release()` 调用（`GeneratedGauntletMovie.cs:60`），而 `Release()` 会先把 `IsReleased = true`（`GeneratedGauntletMovie.cs:58`），再断开父子关系并通知 `Context.OnMovieReleased`。如果你在释放后还持有那个根 widget，它的绑定已经被拆了。
- **接口本身不提供任何东西。** 两个方法都没有默认实现、没有属性、没有事件。想知道发生了什么，只能去看生成出来的类。

## 怎么用

### 怎么拿到它

正常流程下你拿不到、也不需要拿到：它是生成器写进根预制件类里的。mod 需要动它的时候只有两种情况——一是你要**替换**整个数据源（这时调 `GeneratedGauntletMovie.RefreshBindingWithChildren()`，它会转发到 `_root`，见 `GeneratedGauntletMovie.cs:68`）；二是你**手写**了一个要当电影根用的 widget 类（这时必须显式实现这两个方法，见下方代码）。

### 典型用法

```csharp
using TaleWorlds.GauntletUI;
using TaleWorlds.GauntletUI.BaseTypes;
using TaleWorlds.GauntletUI.Data;

// 手写根控件时的最小实现。正常情况下由代码生成器写出这段。
public class MyMovieRootWidget : Widget, IGeneratedGauntletMovieRoot
{
    private readonly MyMovieViewModel _dataSource_Root;

    public MyMovieRootWidget()
    {
        // Widget 的构造函数在生成的类里会被调用，这里保持最简。
        this.IsVisible = true;
    }

    // GeneratedGauntletMovie.Release() 会调它（GeneratedGauntletMovie.cs:70）。
    public void DestroyDataSource()
    {
        // 生成的版本会沿绑定路径递归调用每个子控件的 DestroyDataSource
        // （UICodeGenerationDatabindingVariantExtension.cs:191）。
        this._dataSource_Root = null;
    }

    // 生成的版本是“置空再重新赋值”（UICodeGenerationDatabindingVariantExtension.cs:167），
    // 靠这个强制整棵树重新跑绑定。资源/语言刷新后由
    // GeneratedGauntletMovie.OnResourcesRefreshed 调用（GeneratedGauntletMovie.cs:73）。
    public void RefreshBindingWithChildren()
    {
        var dataSource = this._dataSource_Root;
        this.SetDataSource(null);
        this.SetDataSource(dataSource);
    }
}

// 调用侧：从电影对象上转发，不要直接持有生成的根控件类型。
public static class MyMovieRefresher
{
    public static void AfterLanguageChange(IGauntletMovie movie)
    {
        // IGauntletMovie 上没有 RefreshBindingWithChildren；它只在 GeneratedGauntletMovie 上。
        if (movie is GeneratedGauntletMovie generated)
        {
            generated.OnResourcesRefreshed(null, null, null, null);
        }
    }
}
```

### 最容易踩的坑

把一个不是“根预制件”的生成类当成电影根传进去。`GeneratedGauntletMovie` 的构造函数会直接 `(IGeneratedGauntletMovieRoot)rootWidget`（`GeneratedGauntletMovie.cs:37`），而生成器只在 `WidgetTemplateGenerateContextType == RootPrefab` 时才给类加上这个接口（`UICodeGenerationDatabindingVariantExtension.cs:1329`）。结果是构造 movie 时直接抛 `InvalidCastException`，而且因为没有判空，你在 try/catch 之外根本拿不到那个 widget 去查原因。确保你的 movie 名字对应的预制件根就是根预制件，或者让你的根类显式实现这个接口。

## 使用示例

```csharp
// GeneratedGauntletMovie 内部就是这么拿到根的：一次硬转，没有判空。
GeneratedGauntletMovie movie = new GeneratedGauntletMovie("my_movie", rootWidget);
movie.RefreshBindingWithChildren();   // 转发给根的 IGeneratedGauntletMovieRoot
movie.Release();                      // 内部会调根的 DestroyDataSource
```

## 参见

- [本区域目录](../)
- [GeneratedGauntletMovie](../GeneratedGauntletMovie)
- [IGauntletMovie](../IGauntletMovie)
- [Widget](../Widget)
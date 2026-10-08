---
title: "ViewModel"
description: "UI 视图模型基类：按名称暴露属性、公开一组带值/无值的 PropertyChanged 变体，并给绑定引擎提供反射式读写与命令派发。"
---
# ViewModel

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public abstract class ViewModel : IViewModel, INotifyPropertyChanged`
**Base:** `System.Object`
**Source:** `TaleWorlds.Library/ViewModel.cs`

## 概述

这是 GauntletUI 绑定系统的数据端契约。1.4.6 里的 `ViewModel` 实现了两件不同的事：**给 C# 用**的属性变更通知（九个变体，从 `PropertyChanged` 到 `PropertyChangedWithVec2Value`），和**给 UI 引擎用**的按字符串名读写接口（`GetPropertyValue(string)`、`SetPropertyValue(string, object)`、`GetPropertyType(string)`、`ExecuteCommand(string, object[])`、`GetViewModelAtPath(BindingPath)`）。

它的性能设计值得注意：构造器把 `this.GetType()` 记进 `_type`，然后在一个**进程级静态字典** `_cachedViewModelProperties` 里查这个类型有没有缓存过「属性表 + 方法表」。没有就反射扫一遍 `BindingFlags.Instance | Public | NonPublic` 的所有属性和方法，存进缓存。所以**第一次 new 某个 ViewModel 派生类有反射开销，之后就没有了**——前提是类型不 unloaded。

九个事件不是接口要求，是历史包袱：`PropertyChanged` 走标准 `INotifyPropertyChanged`；其余八个带值变体（泛型/非泛型两套）在 C# 里**只能通过 `OnPropertyChangedWithValue(...)` 触发**，因为 C# 事件在类外不能 invoke。属性名靠 `[CallerMemberName]` 自动捕获。

## 心智模型

典型流程是三步：

1. **声明属性**。派生类写普通自动属性，属性名就是 UI 里的绑定名。
2. **赋值时通知**。要么在 setter 里手写 `OnPropertyChanged()`（`[CallerMemberName]` 会填上属性名），要么用 `SetField(ref _field, value, "PropertyName")` —— 它先比较，**相等时直接返回 false 不发通知**，不等才赋值并通知，返回 bool 表示「值是否真的变了」。
3. **UI 侧按名反射**。`GetPropertyValue("Gold")` 走缓存的属性表 `PropertyInfo.GetGetMethod().InvokeWithLog(this, null)`。命令就是公开方法：`ExecuteCommand("OnConfirm", new object[] { ... })` 会按名找到方法、逐参数做类型转换和兼容性检查再反射调用。

**缓存的三个坑**：

- `_cachedViewModelProperties` 是 `static Dictionary<Type, ...>`，进程级、永不淘汰。ViewModel 派生类所在的程序集如果被卸载再重载（同 DLL 热重载场景），缓存里的旧 `Type` 键会指向已经失效的类型。
- `RefreshPropertyAndMethodInfos()` 是唯一的重建入口，它会遍历「所有引用了 `TaleWorlds.Library` 的程序集」重建整张表。**在运行时改完属性定义后必须手动调它**，UI 才认得新属性。
- `GetPropertiesOfType` 用 `dictionary.Add(...)`，同名属性（比如 `new` 遮蔽基类的同名属性）在某些反射实现下会抛 `ArgumentException`。

**命令派发的限制**：`ExecuteCommand` 有两条路径——先查缓存的方法表（**只有第一个匹配名字的方法，重载会被吞掉**），查不到才沿 `BaseType` 链用 `GetMethod(commandName, Instance|Public|NonPublic)` 找。参数个数必须**完全匹配**：给了 0 个参数而目标方法要 1 个，会静默什么都不做。另外字符串参数会被 `ConvertValueTo` 转换，但**只支持 `string` / `int` / `float` 三种**，其它类型一律得到 null。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `PropertyChanged` | `public event PropertyChangedEventHandler PropertyChanged` | 标准 `INotifyPropertyChanged` 事件。由 `OnPropertyChanged` 触发。add/remove 都是手写的，内部是 `List<PropertyChangedEventHandler>`，首次订阅才分配。 |
| `PropertyChangedWithValue` | `public event PropertyChangedWithValueEventHandler PropertyChangedWithValue` | 泛型带值变更事件。由 `OnPropertyChangedWithValue<T>(T value)`（`where T : class`）触发。 |
| `PropertyChangedWithBoolValue` | `public event PropertyChangedWithBoolValueEventHandler PropertyChangedWithBoolValue` | `bool` 专用带值事件。由 `OnPropertyChangedWithValue(bool value)` 重载触发。 |
| `PropertyChangedWithIntValue` | `public event PropertyChangedWithIntValueEventHandler PropertyChangedWithIntValue` | `int` 专用。由 `OnPropertyChangedWithValue(int value)` 触发。 |
| `PropertyChangedWithFloatValue` | `public event PropertyChangedWithFloatValueEventHandler PropertyChangedWithFloatValue` | `float` 专用。由 `OnPropertyChangedWithValue(float value)` 触发。 |
| `PropertyChangedWithUIntValue` | `public event PropertyChangedWithUIntValueEventHandler PropertyChangedWithUIntValue` | `uint` 专用。由 `OnPropertyChangedWithValue(uint value)` 触发。 |
| `PropertyChangedWithColorValue` | `public event PropertyChangedWithColorValueEventHandler PropertyChangedWithColorValue` | `Color` 专用。由 `OnPropertyChangedWithValue(Color value)` 触发。 |
| `PropertyChangedWithDoubleValue` | `public event PropertyChangedWithDoubleValueEventHandler PropertyChangedWithDoubleValue` | `double` 专用。由 `OnPropertyChangedWithValue(double value)` 触发。 |
| `PropertyChangedWithVec2Value` | `public event PropertyChangedWithVec2ValueEventHandler PropertyChangedWithVec2Value` | `Vec2` 专用。由 `OnPropertyChangedWithValue(Vec2 value)` 触发。 |
| `SetField` | `protected bool SetField<T>(ref T field, T value, string propertyName)` | 属性 setter 的标准写法。`EqualityComparer<T>.Default` 比较，相等则**返回 false 且不发通知**；不等则赋值 + `OnPropertyChanged(propertyName)` + 返回 true。 |
| `OnPropertyChanged` | `public void OnPropertyChanged([CallerMemberName] string propertyName = null)` | 广播 `PropertyChanged`。属性名由 `[CallerMemberName]` 自动取，所以在 setter 里无参调用即可。 |
| `OnPropertyChangedWithValue` | `public void OnPropertyChangedWithValue<T>(T value, [CallerMemberName] string propertyName = null) where T : class` | 广播泛型带值事件。**约束 `T : class`**，值类型走下面的具体重载。 |
| `OnPropertyChangedWithValue` | `public void OnPropertyChangedWithValue(bool value, [CallerMemberName] string propertyName = null)` | 广播 bool 带值事件。 |
| `OnPropertyChangedWithValue` | `public void OnPropertyChangedWithValue(int value, [CallerMemberName] string propertyName = null)` | 广播 int 带值事件。 |
| `OnPropertyChangedWithValue` | `public void OnPropertyChangedWithValue(float value, [CallerMemberName] string propertyName = null)` | 广播 float 带值事件。 |
| `OnPropertyChangedWithValue` | `public void OnPropertyChangedWithValue(uint value, [CallerMemberName] string propertyName = null)` | 广播 uint 带值事件。 |
| `OnPropertyChangedWithValue` | `public void OnPropertyChangedWithValue(Color value, [CallerMemberName] string propertyName = null)` | 广播 Color 带值事件。 |
| `OnPropertyChangedWithValue` | `public void OnPropertyChangedWithValue(double value, [CallerMemberName] string propertyName = null)` | 广播 double 带值事件。 |
| `OnPropertyChangedWithValue` | `public void OnPropertyChangedWithValue(Vec2 value, [CallerMemberName] string propertyName = null)` | 广播 Vec2 带值事件。 |
| `GetViewModelAtPath` | `public object GetViewModelAtPath(BindingPath path, bool isList)` | 带 `isList` 标志的路径解析，**直接忽略 `isList` 参数**并转发给单参重载。保留给旧调用点。 |
| `GetViewModelAtPath` | `public object GetViewModelAtPath(BindingPath path)` | 沿 `BindingPath` 的 `SubPath` 逐段解析：取属性值 → 若是 `ViewModel` 递归、若是 `IMBBindingList` 走 `GetChildAtPath`（按 `Convert.ToInt32(FirstNode)` 当下标）、否则返回 null。**走不通返回 null，不抛**。 |
| `GetPropertyValue` | `public object GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder)` | 带 `PropertyTypeFeeder` 的重载，**忽略该参数**直接转发。旧接口兼容层。 |
| `GetPropertyValue` | `public object GetPropertyValue(string name)` | 按名取值，属性不存在时返回 **null**。内部走缓存的 `PropertyInfo` + `InvokeWithLog`。 |
| `GetPropertyType` | `public Type GetPropertyType(string name)` | 按名取属性的声明类型，属性不存在时返回 **null**。 |
| `SetPropertyValue` | `public void SetPropertyValue(string name, object value)` | 按名赋值。属性不存在、或**没有 setter（`GetSetMethod()` 返回 null）时静默返回**，不报错。 |
| `ExecuteCommand` | `public void ExecuteCommand(string commandName, object[] parameters)` | 按名派发命令。先查缓存方法表（同名重载只保留第一个），查不到再沿基类链 `GetMethod`。参数个数必须**精确匹配**；个数为 0 时即使 `parameters` 是空数组也直接无参调。参数不兼容则静默返回。 |
| `RefreshValues` | `public virtual void RefreshValues()` | 虚方法，空实现。UI 需要「一次性重算所有显示值」时的钩子。 |
| `OnFinalize` | `public virtual void OnFinalize()` | 虚方法，空实现。ViewModel 离开 UI 时的收尾钩子——**解绑事件在这里做**。 |
| `RefreshPropertyAndMethodInfos` | `public static void RefreshPropertyAndMethodInfos()` | 清空 `_cachedViewModelProperties` 并遍历所有引用 `TaleWorlds.Library` 的程序集，对每个 `IViewModel` 实现重建属性/方法表。**运行时新增属性或改方法签名后必须调**。 |
| `UIDebugMode` | `public static bool UIDebugMode` | 公开静态开关，UI 调试模式的全局标志。 |
| `IViewModelGetterInterface` | `public interface IViewModelGetterInterface` | 只读侧契约：`IsValueSynced(string name)`、`GetPropertyType(string name)`、`GetPropertyValue(string name)`、`OnFinalize()`。 |
| `IViewModelSetterInterface` | `public interface IViewModelSetterInterface` | 只写侧契约：`SetPropertyValue(string name, object value)`、`OnFinalize()`。 |

## 怎么用

### 怎么拿到它

`ViewModel` 是 `TaleWorlds.Library/ViewModel.cs:10` 的 `public abstract class ViewModel : IViewModel, INotifyPropertyChanged`——**725 行、37 个公开成员**，模组 UI 的基类。构造器是 `protected ViewModel()`（`:211`），外部不能 new 抽象类。

**它的核心机制是两个东西**：

1. **十个类型化的事件**，从通用的 `PropertyChangedEventHandler PropertyChanged`（`:15`）一直到按值类型分的 `PropertyChangedWithBoolValueEventHandler`（`:59`）、`...WithIntValue...`（`:81`）、`...WithColorValue...`（`:125`）、`...WithVec2Value...`（`:191`）。每个都有一个配套的 `public void OnPropertyChangedWithValue(...)` 重载（`:263` class、`:277` bool、`:291` int、`:305` float、`:319` uint、`:333` Color、`:347` double、`:361` Vec2），参数末尾带 `[CallerMemberName]`。
2. **`protected bool SetField<T>(ref T field, T value, string propertyName)`**（`:237`）——MVVM 的标准写法，帮你把「赋值 + 通知」合成一步。

反射入口用于绑定：`public object GetViewModelAtPath(BindingPath path)`（`:381`）、`public object GetPropertyValue(string name)`（`:439`），两者都靠 `GetProperty(...)` 拿 `PropertyInfo` 再 `GetGetMethod().InvokeWithLog(this, null)`（`:387`、`:441`）。

### 典型用法

```csharp
using TaleWorlds.Library;

public class TavernVm : ViewModel                          // ViewModel.cs:10
{
    private int _gold;

    public int Gold
    {
        get { return _gold; }
        set
        {
            // SetField：值没变就返回 false，不发通知（:237-248）
            if (SetField(ref _gold, value, nameof(Gold)))
            {
                OnPropertyChangedWithValue(value, nameof(GoldCanAfford));   // :291，int 重载
            }
        }
    }

    public bool GoldCanAfford => _gold >= 100;

    // 供 XML 绑定反射用的路径读取（:381 / :439）
    public override void ExecuteCommand(string commandName, object[] parameters)   // IViewModel.cs:25
    {
        if (commandName == "BuyDrink")
        {
            Gold -= 10;
        }
    }

    public override void SetPropertyValue(string name, object value)              // IViewModel.cs:22
    {
        if (name == nameof(Gold))
        {
            Gold = System.Convert.ToInt32(value);
        }
    }
}

// 框架侧按路径取值
var v = new TavernVm();
object got = v.GetPropertyValue("Gold");                            // :439
object nested = v.GetViewModelAtPath(new BindingPath("Child.Name"));  // :381
```

### 最容易踩的坑

**直接给字段赋值，或者手动 `PropertyChanged?.Invoke(...)`，绕开 `SetField`。** `SetField`（`:237-248`）先 `if (EqualityComparer<T>.Default.Equals(field, value)) return false;` 再赋值、再 `OnPropertyChanged(propertyName)`（`:249`）。自己 `public int Gold { get; set; }` 的话，UI 绑定在值变化时**收不到通知**，控件就不会刷新——而这在初次加载时看不出来，只有运行期改数值才暴露，表现为「面板上的数字不动」。另外注意 `SetField` 需要**显式传 `propertyName`**，不像 `OnPropertyChanged` 那样靠 `[CallerMemberName]`（`:249`），忘了传就把 `null` 当属性名发出去了。

第二个坑是退订。`PropertyChanged`（`:15`）是**事件**，而且 `OnPropertyChanged`（`:249`）遍历的是 `_eventHandlers` 这个内部列表（`:251-257`）——**每次调用都会把同一组处理器再广播一遍**。如果你的 ScreenComponent 在 `OnScreenOpened` 里 `+=` 订阅了 VM 的事件、却在 `OnScreenFinalize` 里没 `-=`，那么再次打开界面会叠加多层订阅，界面刷新次数成倍增长，并且**旧的 ViewModel 实例仍然被引用**（内存泄漏）。退订必须传出**与订阅时同一个委托实例**——写成 lambda 就退不掉。

第三，`GetViewModelAtPath`（`:381`）的递归依赖 `path.SubPath`（`:384`），当属性不是 `ViewModel` 也不是 `IMBBindingList` 时返回 `null`（`:396`）。所以路径里少写或多写一段，得到的都是 null 而不报错。

## 真实示例

标准写法：自动属性 + `SetField`，UI 绑定到 `GoldText`。

```csharp
public class MyTradeScreenViewModel : ViewModel
{
    private int _gold;
    private string _title;

    public string Title
    {
        get => _title;
        set => SetField(ref _title, value, nameof(Title));
    }

    public int Gold
    {
        get => _gold;
        set => SetField(ref _gold, value, nameof(Gold));
    }

    public void OnConfirm() { }

    public void OnAdjustGold(int delta) { }
}
```

UI 侧按名读写与派发命令（这就是绑定引擎在做的事）：

```csharp
MyTradeScreenViewModel vm = new MyTradeScreenViewModel();

// 取值
object gold = vm.GetPropertyValue("Gold");
Type goldType = vm.GetPropertyType("Gold");

// 赋值（属性名写错或没有 setter 时静默无操作）
vm.SetPropertyValue("Gold", 120);
vm.OnPropertyChanged();

// 派发命令：参数个数必须与方法精确匹配
vm.ExecuteCommand("OnAdjustGold", new object[] { 20 });
vm.ExecuteCommand("OnConfirm", new object[] { });

// 沿 ViewModel 树按路径找子 ViewModel
object child = vm.GetViewModelAtPath(new BindingPath("SubPanel.Item0.Name"));
```

刷新与收尾：

```csharp
public override void RefreshValues()
{
    base.RefreshValues();
    SetField(ref _gold, Campaign.Current.Treasury.Gold, nameof(Gold));
}

public override void OnFinalize()
{
    // 在这里解绑事件，避免 ViewModel 被 UI 持有而泄漏
    base.OnFinalize();
}
```

## 风险与边界

- **事件在类外无法触发。** 九个事件都是标准 C# event，只有 `OnPropertyChanged*` 系列（public）能广播。想从外部强制刷新，必须调这些 `On*` 方法。
- **属性缓存是进程级静态且无失效机制。** 只有 `RefreshPropertyAndMethodInfos()` 能重建。热重载 / 程序集卸载场景下缓存会指向失效类型。
- **`RefreshPropertyAndMethodInfos()` 开销大。** 它遍历整个 AppDomain 里所有引用 `TaleWorlds.Library` 的程序集并对每个 `IViewModel` 实现做两轮反射。别放进每帧 tick。
- **`SetPropertyValue` 静默失败。** 属性名拼错、属性只有 getter，UI 上什么都看不出来。调试时用 `GetPropertyType(name) == null` 验一下名字。
- **`ExecuteCommand` 参数个数必须精确。** 传 0 个参数调一个要 1 个参数的方法，什么都不会发生，也没有日志。
- **命令重载会被吞。** 缓存方法表用 `if (!dictionary2.ContainsKey(methodInfo.Name))` 只保留第一个同名方法。`OnFoo(int)` 和 `OnFoo(string)` 同时存在时，只有一个能通过命令名调，另一个只能走基类链碰运气。
- **字符串参数转换只支持三种类型。** `ConvertValueTo` 处理 `string` / `int` / `float`，其它目标类型得到 null，随后 `AreParametersCompatibleWithMethod` 会判定不兼容而静默返回。
- **`GetViewModelAtPath` 用 `Convert.ToInt32` 当下标。** 路径里写了非数字会抛 `FormatException`；下标越界则返回 null。
- **通知无节流。** 每次 `SetField` 变化都立刻广播。绑定频繁变化的属性（比如每帧变的时间）会让 UI 重建开销爆炸。
- **`UIDebugMode` 是全局静态。** 它影响所有 UI，别在 mod 里随手改。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Library/ViewModel.cs` 逐行比对，**public 表面完全一致**：九个事件、`SetField`、九个 `OnPropertyChanged*` 重载、两个 `GetViewModelAtPath` 重载、两个 `GetPropertyValue` 重载、`GetPropertyType`、`SetPropertyValue`、`OnFinalize`、`ExecuteCommand`、`RefreshValues`、`RefreshPropertyAndMethodInfos`、`UIDebugMode`、两个嵌套接口全都没变。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ViewModel.cs`（637 行）与 `bannerlord-1.4.6/TaleWorlds.Library/ViewModel.cs`（725 行）逐成员比对 public/protected 表面。**三版 public 表面完全一致（含全部事件与委托在内，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 637 行、1.4.6 是 725 行。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- UI 弹出通道：[InformationManager](../InformationManager) 的 `ShowInquiry` / `ShowTextInquiry` 是游戏里最常见的「从 ViewModel 触达 UI」路径
- 宿主：[Game](../Game) 通过 `GameStateManager` 持有打开这些 ViewModel 的状态
- 嵌套契约：`IViewModelGetterInterface` / `IViewModelSetterInterface` 是绑定引擎实际依赖的两个嵌套接口

- 上一级：[v1.4.6 内容根](../../../)

## 导航

- 同桶：[`../BindingPath`](../BindingPath) · [`../InformationManager`](../InformationManager) · [`../GameStateManager`](../GameStateManager)
- 父索引：[`../_index`](../_index)

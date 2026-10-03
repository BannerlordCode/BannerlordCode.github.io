---
title: "ViewModel"
description: "UI 绑定基类：十个类型化通知事件各自持一份懒建的 List，所以事件没有 null 检查；同时按属性名做整套反射读写与 ExecuteCommand 派发，供 Gauntlet 的 BindingPath 驱动。"
---

# ViewModel

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public abstract class ViewModel : IViewModel, INotifyPropertyChanged`
**Base:** 无（仅隐式 `System.Object`）；实现 `IViewModel` 与 `System.ComponentModel.INotifyPropertyChanged`
**File:** `TaleWorlds.Library/ViewModel.cs`（全文 727 行，24199 字节）

## 概述

`ViewModel` 是引擎 UI 层的绑定基类。它做两件事，泾渭分明：

**一是通知。** 十个 `PropertyChanged*` 事件——一个标准的 `PropertyChanged` 加九个类型化版本（`WithValue` / `WithBoolValue` / `WithIntValue` / `WithFloatValue` / `WithUIntValue` / `WithColorValue` / `WithDoubleValue` / `WithVec2Value`，以及泛型 `OnPropertyChangedWithValue<T>`）。类型化版本存在的意义是**让绑定端不必把值装箱回 `object` 再拆箱**。

**二是反射查询。** `GetPropertyValue(string name)` / `SetPropertyValue(string name, object value)` / `GetPropertyType(string name)` / `ExecuteCommand(string commandName, object[] parameters)` / `GetViewModelAtPath(BindingPath path)`——五个方法全是**按字符串名操作自身**，为 Gauntlet UI 的数据绑定引擎服务。

**本类最反直觉的一点是十个事件的实现方式。** 它们不用自动属性，每个都手写 `add` / `remove` 访问器，且每个事件各持一份自己的 `List<T>`：

```csharp
public event PropertyChangedEventHandler PropertyChanged
{
    add
    {
        if (this._eventHandlers == null) { this._eventHandlers = new List<PropertyChangedEventHandler>(); }
        this._eventHandlers.Add(value);
    }
    remove
    {
        if (this._eventHandlers != null) { this._eventHandlers.Remove(value); }
    }
}
```

十个事件，十份列表，全部懒建、全部带 null 检查。**为什么不用委托的多播合并字段？** 大概是为了在 UI 生命周期里能安全地 `Clear()` 单个事件而不影响其它——`OnFinalize` 清理订阅时这很有用。

## 心智模型

**把它想成「一个把自己的属性和方法按名字暴露出来的反射容器」，而不是「普通的 INotifyPropertyChanged 实现」。** 后者只做通知，前者才是它的主业。

**第一步，理解 `SetField` 在引擎里是死代码。** 它是本类最漂亮的成员：

```csharp
protected bool SetField<T>(ref T field, T value, string propertyName)
{
    if (EqualityComparer<T>.Default.Equals(field, value)) { return false; }
    field = value;
    this.OnPropertyChanged(propertyName);
    return true;
}
```

三个好处：值没变就**不触发通知**（避免 UI 无谓刷新）、用 `EqualityComparer<T>.Default` 所以 `float` 也能正确比较、返回 `bool` 让调用方知道到底改没改。

**但 `grep -rn "SetField" --include=*.cs .` 在排除 `ViewModel.cs` 自身后命中 0 条。** 整个 1.3.0 引擎一次都没调用它。对比之下 `.OnPropertyChanged(` 有 **251 处**调用。所以引擎自己的写法是手写字段 + 手调 `OnPropertyChanged`，`SetField` 纯粹是**留给 mod 用的**。这不是反例，这是本页最实用的一条情报：**你的 VM 应该用 `SetField`，官方的 VM 反而不用。**

**第二步，理解十个事件的代价。** 十个 `List<T>` 字段意味着：**订阅一个事件只填一份列表，但订阅全部十个要填十份**。而 `OnPropertyChanged` 触发时只走 `_eventHandlers` 那一份：

```csharp
public void OnPropertyChanged([CallerMemberName] string propertyName = null)
{
    if (this._eventHandlers != null)
    {
        for (int i = 0; i < this._eventHandlers.Count; i++)
        {
            PropertyChangedEventHandler handler = this._eventHandlers[i];
            handler(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
```

**它在循环里逐个取出再调用，而不是 `PropertyChanged?.Invoke(...)`。** 这个写法有一个实际后果：**回调里退订自己不会导致集合修改异常**——因为取的是索引处的快照引用。但如果回调里退订了**后面**某个订阅者，索引会前移，导致**跳过那一个**。反向的「循环中订阅」同理会越界。**在这十个事件里做增删订阅要当心。**

**第三步，理解 `GetPropertyValue` 是按名字反射，不是按字段。** 它的实现是：

```csharp
public object GetPropertyValue(string name)
{
    PropertyInfo property = this.GetProperty(name);
    object result = null;
    if (property != null) { result = property.GetGetMethod().InvokeWithLog(this, null); }
    return result;
}
```

`GetProperty(name)` 查的是构造器里填好的 `_propertiesAndMethods.Properties` 字典——**只有 public 属性**，不含字段。找不到返回 `null` 而不是抛异常。`SetPropertyValue` 更谨慎，它会先 `property.GetSetMethod()` 并在 `null` 时直接 `return`——**只读属性静默忽略写入**。

注意 `GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder)` 这个重载**把参数完全忽略**，直接转调无参版。它存在的意义只是满足某个接口签名。

**第四步，理解 `ExecuteCommand` 的两段查找和它的歧义处理。** 它先查缓存字典；查不到则沿 `BaseType` 链用 `BindingFlags.Instance | Public | NonPublic` 反射找。找到后比对参数个数，**个数不匹配就什么也不做**——不抛异常、不报错。

真正值得注意的是它的字符串转换：

```csharp
if (obj is string && parameterType != typeof(string))
{
    array[i] = ViewModel.ConvertValueTo((string)obj, parameterType);
}
```

**XML / 绑定文件里传进来的永远是字符串**，所以 `ExecuteCommand("SetCount", new object[] { "42" })` 会把 `"42"` 转成目标参数的类型。转换后还有一道 `AreParametersCompatibleWithMethod` 检查，不匹配就静默返回。**所以命令名打错、参数个数错、类型转不过——三种错误都表现为「什么都没发生」。**

**第五步，理解构造器里那张缓存表。** `protected ViewModel()` 做的唯一事情是查静态缓存 `_cachedViewModelProperties`：

```csharp
this._type = base.GetType();
ViewModel._cachedViewModelProperties.TryGetValue(this._type, out var collection);
if (collection == null)
{
    this._propertiesAndMethods = ViewModel.GetPropertiesOfType(this._type);
    ViewModel._cachedViewModelProperties.Add(this._type, this._propertiesAndMethods);
    return;
}
this._propertiesAndMethods = collection;
```

**按具体类型缓存，一个类型只反射一次。** 缓存是 `static` 且**从不清理**——每个 VM 类型泄漏一条 `DataSourceTypeBindingPropertiesCollection`。类型数量有界的游戏里无所谓，但动态生成 VM 类型的代码会累积。`RefreshPropertyAndMethodInfos()` 是官方的清空入口。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `protected ViewModel()` | **无参且 `protected`**——本类是 `abstract`，且派生类必须自己声明构造器。唯一工作是从静态缓存取/建本类型的属性方法表。 |
| `SetField` | `protected bool SetField<T>(ref T field, T value, string propertyName)` | 值变才赋值并通知，返回是否变化。**引擎自身一次都没用（0 处调用），是给 mod 的。** |
| `OnPropertyChanged` | `public void OnPropertyChanged([CallerMemberName] string propertyName = null)` | 触发标准事件。**逐个取订阅者调用，不是多播委托**，所以增删订阅要小心索引前移。 |
| `OnPropertyChangedWithValue<T>` | `public void OnPropertyChangedWithValue<T>(T value, [CallerMemberName] string propertyName = null) where T : class` | 泛型版本，约束 `T : class`（引用类型）。另有八个按类型重载：`bool` / `int` / `float` / `uint` / `Color` / `double` / `Vec2`。 |
| `PropertyChanged` | `public event PropertyChangedEventHandler PropertyChanged` | 标准 WPF 风格事件，`_eventHandlers` 懒建 `List`。 |
| `PropertyChangedWithValue` | `public event PropertyChangedWithValueEventHandler PropertyChangedWithValue` | 引用类型值的专用事件。 |
| `PropertyChangedWithBoolValue` / `WithIntValue` / `WithFloatValue` / `WithUIntValue` / `WithColorValue` / `WithDoubleValue` / `WithVec2Value` | `public event PropertyChangedWithXXXValueEventHandler ...` | 每种值类型一个事件，避免装箱。**全部懒建各自独立的 `List<T>`。** |
| `GetViewModelAtPath` | `public object GetViewModelAtPath(BindingPath path)` | 沿 [BindingPath](../BindingPath) 逐段走：拿到属性值，是 `ViewModel` 就递归，是 `IMBBindingList` 就走 `GetChildAtPath`，否则返回 `null`。 |
| `GetViewModelAtPath` | `public object GetViewModelAtPath(BindingPath path, bool isList)` | **直接忽略 `isList`**，转调无参版。这个重载纯粹是为接口签名存在的。 |
| `GetPropertyValue` | `public object GetPropertyValue(string name)` | 按属性名反射读。**找不到返回 `null`**，不抛异常。字段不在册，只有 public 属性。 |
| `GetPropertyValue` | `public object GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder)` | **忽略第二个参数**，直接转调无参版。 |
| `GetPropertyType` | `public Type GetPropertyType(string name)` | 返回属性的 `PropertyType`；找不到返回 `null`。 |
| `SetPropertyValue` | `public void SetPropertyValue(string name, object value)` | 按名字反射写。**只读属性（无 setter）静默忽略**——先判 `GetSetMethod() == null` 就 return。 |
| `ExecuteCommand` | `public void ExecuteCommand(string commandName, object[] parameters)` | 派发命令。两段查找（缓存字典 → 沿基类链反射）；参数个数不符**静默不做任何事**；字符串参数会 `ConvertValueTo` 转成目标类型。 |
| `RefreshValues` | `public virtual void RefreshValues()` | 虚方法，默认空。让 VM 批量重算绑定值。官方有多处 `override`（`BoardGameVM` 等）。 |
| `OnFinalize` | `public virtual void OnFinalize()` | 虚方法，默认空。清理订阅的钩子。 |
| `RefreshPropertyAndMethodInfos` | `public static void RefreshPropertyAndMethodInfos()` | 清空静态缓存 `_cachedViewModelProperties`。**动态改过属性后必须调。** |
| `UIDebugMode` | `public static bool UIDebugMode` | 全局调试开关。**它是 public 可写的静态字段**，任何 mod 都能改。 |
| `IViewModel` | `public interface IViewModelGetterInterface` / `IViewModelSetterInterface` | 嵌套接口，拆分只读 / 只写两套绑定契约。 |
| `Properties` / `Methods` | `public Dictionary<string, PropertyInfo> Properties { get; set; }` / `public Dictionary<string, MethodInfo> Methods { get; set; }` | 在**嵌套类** `DataSourceTypeBindingPropertiesCollection` 上，不是本类的成员。这个字典就是反射缓存的实际内容。 |
| `AutoGeneratedInstanceCollectObjects` | — | 本类无此成员（那是 `EntitySystem` / `WeaponDesign` 那类的）。 |

## 真实示例

标准的引擎 VM 写法——字段 + 显式通知。注意引擎**不用** `SetField`，251 处 `.OnPropertyChanged(` 都是手写的：

```csharp
using TaleWorlds.Library;

public class MyCounterVM : ViewModel
{
    private int _count;
    private string _label;

    public int Count
    {
        get { return this._count; }
        set
        {
            if (this._count == value) { return; }
            this._count = value;
            // 引擎的典型写法：手写比较 + 手写通知。
            this.OnPropertyChanged();
        }
    }

    public string Label
    {
        get { return this._label; }
        set { this._label = value; this.OnPropertyChangedWithValue(value); }
    }

    public void Increment()
    {
        this.Count++;
    }

    public override void RefreshValues()
    {
        base.RefreshValues();
        this.Count = this._count + 1;
    }
}
```

`OnPropertyChanged()` 不传参数时靠 `[CallerMemberName]` 自动填上 `"Count"`。`ExecuteCommand("Increment", new object[0])` 能调到 `Increment()`——**零参数方法即使 `parameters` 传了非零长度的空数组也会被调用**（`parameters2.Length == 0` 分支）。

用 `SetField` 的 mod 风格——更短，且天然带类型感知比较：

```csharp
using TaleWorlds.Library;

public class MyTypedCounterVM : ViewModel
{
    private float _ratio;
    private bool _enabled;

    public float Ratio
    {
        get { return this._ratio; }
        set { this.SetField(ref this._ratio, value, "Ratio"); }
    }

    public bool Enabled
    {
        get { return this._enabled; }
        set { this.SetField(ref this._enabled, value, "Enabled"); }
    }

    public void Apply(float newRatio, bool on)
    {
        // 返回值告诉你到底有没有变 —— 值没变就不会白白刷新 UI。
        bool ratioChanged = this.SetField(ref this._ratio, newRatio, "Ratio");
        bool enabledChanged = this.SetField(ref this._enabled, on, "Enabled");

        MBDebug.Print("changed ratio=" + ratioChanged + " enabled=" + enabledChanged);
    }
}
```

`SetField` 的三个优势在这里都兑现了：`float` 走 `EqualityComparer<float>.Default` 能正确判等（不会因为 `-0.0f` 与 `0.0f` 之外的原因误报）、值不变时不触发通知、返回值让调用方知道是否需要后续动作。

按名字反射读写——这是数据绑定引擎走的路，你也可以手动用：

```csharp
using TaleWorlds.Library;

public static void InspectByName(MyCounterVM vm)
{
    // 按属性名读。找不到返回 null，不抛异常。
    object count = vm.GetPropertyValue("Count");
    Type countType = vm.GetPropertyType("Count");

    // 按属性名写。只读属性会被静默忽略。
    vm.SetPropertyValue("Label", "hello");

    // 命令派发：字符串参数会被转成目标参数类型。
    vm.ExecuteCommand("Increment", new object[0]);

    // 这两个是"不存在"的：字段不在册，未知名字也返回 null。
    object missing = vm.GetPropertyValue("_count");
    object nonexistent = vm.GetPropertyValue("NoSuchProperty");

    MBDebug.Print("count=" + count + " type=" + countType
        + " fieldViaReflection=" + missing
        + " nonexistent=" + nonexistent);
}
```

`GetPropertyValue("_count")` 返回 `null` 而**不是那个整数值**——因为 `GetProperty` 只查 `Properties` 字典（public 属性），私有字段从不在册。这是本页最容易误解的一点。

订阅类型化事件，注意列表语义：

```csharp
using System.Collections.Generic;
using TaleWorlds.Library;
using TaleWorlds.Localization;

public static void SubscribeTyped(MyCounterVM vm)
{
    // 类型化事件带值，省掉拆箱。
    PropertyChangedWithIntValueEventHandler onCount = delegate(int value)
    {
        MBDebug.Print("count changed to " + value);
    };
    vm.PropertyChangedWithIntValue += onCount;

    // 退订：List.Remove 按委托相等性移除第一个匹配项。
    vm.PropertyChangedWithIntValue -= onCount;

    // 也可以走泛型版本（约束 T : class，所以 int 不行）：
    vm.PropertyChangedWithValue += delegate(TextObject value)
    {
        MBDebug.Print("label changed");
    };

    // 走 BindingPath 深取嵌套 VM。
    BindingPath path = new BindingPath("Nested.Child.Value");
    object target = vm.GetViewModelAtPath(path);
    MBDebug.Print("path target=" + (target != null));
}
```

**`OnPropertyChangedWithValue<T>` 的约束是 `where T : class`，所以 `int` / `float` 走不了泛型版，必须用类型化事件。** 这正是那八个类型化重载存在的理由。

## 风险与边界

- **`SetField` 在引擎里零调用。** 它是给 mod 的 API，不是官方风格。想跟引擎保持一致就手写比较 + `OnPropertyChanged()`；想少写代码就用 `SetField`。
- **`SetField` 的 `propertyName` 是手传的字符串。** 传错就通知了错误的属性名（不编译报错）。**用 `[CallerMemberName]` 的话要自己写在一个带该特性参数的方法里**，本类没有提供 `SetField(ref T, T)` 的两参重载。
- **十个事件各持一份 `List<T>`。** 内存开销是十倍于多播委托，且每个事件懒建。频繁创建短命 VM 会持续分配。
- **触发时逐个取订阅者调用，不是多播委托。** 循环里退订**后面的**订阅者会导致索引前移、**跳过那一个**；循环里**添加**订阅者会越界（`i < this._eventHandlers.Count` 每次重新求值）。**在回调里改订阅列表要格外小心。**
- **`GetPropertyValue` 只认 public 属性，不认字段。** 私有字段用属性名去查返回 `null`。
- **`GetPropertyValue` 找不到返回 `null`，不抛异常。** 对值类型属性这意味着返回 `null` 而不是 0——**装箱语义上的坑**。
- **`SetPropertyValue` 对只读属性静默忽略。** 没有 setter 就 `return`，无返回值、无日志。写不进去不会有任何提示。
- **`ExecuteCommand` 的三种失败都是静默的**：命令名找不到、参数个数不符、`AreParametersCompatibleWithMethod` 不通过——**全部表现为「什么都没发生」**。调试命令派发问题时先手动 `InvokeWithLog` 验证。
- **`ExecuteCommand` 会调用 `NonPublic` 方法。** 反射标志是 `BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic`，所以**私有方法也能被派发**。别用它做安全边界。
- **`GetViewModelAtPath(BindingPath, bool)` 忽略 `isList`。** 参数是摆设。
- **`GetPropertyValue(string, PropertyTypeFeeder)` 忽略 `propertyTypeFeeder`。** 同上，纯签名兼容。
- **`property.GetGetMethod()` 可能返回 null。** 无 getter 的属性（写属性）上调用 `GetPropertyValue` 会 `NullReferenceException`，因为 `GetProperty` 只在有 `PropertyInfo` 时返回它，不校验可读性。
- **静态缓存永不自动清理。** `_cachedViewModelProperties` 是 `static` 且只增不减。动态生成 VM 类型的代码会累积泄漏——需要时调 `RefreshPropertyAndMethodInfos()`。
- **构造器是 `protected` 且无参。** 派生类必须声明构造器；若要带初始化参数，得自己 `public MyVM(int x) : base() { ... }`。
- **`UIDebugMode` 是 public 可写静态字段。** 任何 mod 都能改，且影响全局。
- **`DataSourceTypeBindingPropertiesCollection` 是嵌套类。** 它的 `Properties` / `Methods` **不是本类的成员**，别在本类实例上找它们。
- **`TaleWorlds.Library` 命名空间。** 写 VM 必须 `using TaleWorlds.Library;`——`TaleWorlds.Core` 里的 UI 侧类型大量依赖它。

## 跨版本提示

`ViewModel.cs` 在五个源码树里**public 成员集合完全一致**——十个事件、`SetField`、`OnPropertyChanged` 加九个 `OnPropertyChangedWithValue` 重载、两个 `GetViewModelAtPath`、两个 `GetPropertyValue`、`GetPropertyType`、`SetPropertyValue`、`ExecuteCommand`、`RefreshValues`、`OnFinalize`、`RefreshPropertyAndMethodInfos`、`UIDebugMode`、两个嵌套接口，全部相同，**没有任何增删**。

字节数：24199（1.3.0）、24604（1.3.15）、24175（1.4.6 / 1.4.7）、24191（1.5.3）；行数 727 / 725 / 725 / 725 / 725。**1.3.15 比 1.3.0 反而大了 405 字节却少 2 行**，1.4.6 又回落——这些差异来自私有实现与反编译排版，**公开 API 表面一字未动**。

`IViewModel` 接口与 `IMBBindingList` 在五个版本上也没变（后者始终是 `public interface IMBBindingList : IList, ICollection, IEnumerable` 加一个 `ListChangedEventHandler ListChanged` 事件）。

结论：**这是本批里跨版本稳定性最高的一个类型**，1.3 → 1.5 零变化。你的 VM 基类不需要任何版本适配。变化只可能出现在具体的派生 VM 上（游戏每个界面都有自己的 VM，随版本增删属性），那属于要复核的对象而非基类本身。

## 依赖关系

- 绑定路径：[BindingPath](../BindingPath) 是 `GetViewModelAtPath` 的参数类型，`path.SubPath` / `path.FirstNode` 决定逐段反射的走向
- 列表契约：[IMBBindingList](../IMBBindingList)（`TaleWorlds.Library`）是 `ViewModel` 在遍历列表分支时识别的接口，继承 `IList` 并额外有 `ListChanged` 事件
- 反射缓存容器：嵌套类 `DataSourceTypeBindingPropertiesCollection` 持有 `Dictionary<string, PropertyInfo> Properties` 与 `Dictionary<string, MethodInfo> Methods`，是 `GetProperty` / `ExecuteCommand` 的数据源
- 界面侧：[Widget](../../gui/Widget) 等 Gauntlet 控件通过绑定路径拉取本类实例的数据；本类也在 `TaleWorlds.Library` 里，与 UI 层同程序集
- 只读集合约定：[MBReadOnlyList](../MBReadOnlyList) 解释绑定端拿到集合时的只读承诺含义（同桶兄弟，同属 `TaleWorlds.Library`）
- 桶首页：[core-extra API 分区](../)
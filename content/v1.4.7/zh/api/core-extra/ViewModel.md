---
title: "ViewModel"
description: "Gauntlet UI 的数据绑定基类：实现 INotifyPropertyChanged，提供属性 / 方法的反射索引、ExecuteCommand 命令派发、以及路径穿透访问（GetViewModelAtPath）。所有自定义 UI 面板都从它派生。"
---
# ViewModel

**命名空间：** `TaleWorlds.Library`
**模块：** `TaleWorlds.Library`
**类型：** `public abstract class ViewModel : IViewModel, INotifyPropertyChanged`
**基类：** 无，实现 `TaleWorlds.Library.IViewModel` 与 `System.ComponentModel.INotifyPropertyChanged`
**源文件：** `TaleWorlds.Library/ViewModel.cs`（声明见第 10 行）

## 概述

`ViewModel` 是 Gauntlet UI 的数据绑定基类。Gauntlet 不用 XAML 式的静态绑定树，而是**运行时按属性名反射**：Prefab 里的 `TextWidget.Text` 绑到 VM 的某个属性，绑定引擎调用 `GetPropertyValue("Text")` 取值，再订阅 `PropertyChanged` 监听变化。`ViewModel` 就是这套机制的宿主。

它做四件事：**变更通知**（`OnPropertyChanged` 与一整组 `OnPropertyChangedWithValue<T>` 重载，配合 `SetField` 做「变了才通知」）、**反射索引**（`RefreshPropertyAndMethodInfos` 把属性与方法缓存进 `Properties` / `Methods` 字典，让按名查找不重复走反射）、**命令派发**（`ExecuteCommand(commandName, parameters)` 让 Prefab 里的按钮点击按名字调方法）、**路径穿透**（`GetViewModelAtPath` 让子 VM 树能被统一寻址）。

它还有一整套 `PropertyChanged` 事件的显式实现（`OnPropertyChanging` / `OnPropertyChanged` / `AddPropertyChangedHandler` / `RemovePropertyChangedHandler`）。派生类**不应**自己 `RaisePropertyChanged`，而应调用 `OnPropertyChanged(nameof(X))` 或用 `SetField`。

## 心智模型

写 UI 面板时的心智模型只有三句话：

1. **VM 的 public 属性就是绑定面。** Prefab 上写 `VM.SomeText`，引擎就调 `GetPropertyValue("SomeText")`。属性名拼错不会编译报错，只会在运行时返回 null 或空字符串。
2. **每次改变字段后必须通知。** 用 `SetField(ref _x, value, nameof(X))` 一步完成赋值 + 通知，它内部只在值真的变了时才发事件——这是避免 UI 每帧重绘的关键。
3. **命令用 public 方法。** Prefab 里 `CommandName="DoThing"`，点击时引擎调 `ExecuteCommand("DoThing", params)`，它按名字从 `Methods` 字典里找方法并调用。**方法签名必须能被无参或约定参数形式调用**。

另一个必须知道的点是 **`GetViewModelAtPath` 的 null 语义**：路径中的某一段不存在时返回 `null`，不抛异常。嵌套 VM 树里中间层为 null 是常态，调用方必须逐层判空。

还有 `UIDebugMode` 这个静态开关：打开后绑定相关的失败会走更详细的诊断输出。调试「绑定没生效」时先开它。

## 何时使用 / 何时不要使用

- **使用**：实现任何自定义 Gauntlet 面板的数据侧。
- **使用**：在 VM 里暴露计算属性供 Prefab 绑定（例如 `public string PriceText => _price + " 文"`——但每次读取都算，注意性能）。
- **使用**：用 `ExecuteCommand` 的命令派发替代直接挂事件（更适合 MVVM，也更容易被 UI 重用）。
- **不要**：在自己的 VM 里缓存 `PropertyInfo` / `MethodInfo` 绕过 `Properties` / `Methods`——引擎的反射索引是全局刷新机制，绕过它会在热重载后失效。
- **不要**：在 `PropertyChanged` 回调里修改另一个也会触发通知的属性，容易形成通知风暴。
- **不要**：把 VM 实例存进静态字段——UI 生命周期由屏幕栈管理，VM 随之销毁。

## 成员说明

### 一、变更通知

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `protected bool SetField<T>(ref T field, T value, string propertyName)` | **最常用的写法**：值变了才赋值并通知。返回 `bool` 表示是否真的改了。 |
| `public void OnPropertyChanged([CallerMemberName] string propertyName = null)` | 显式触发属性变更通知。参数由调用者属性名自动填充。 |
| `public void OnPropertyChangedWithValue<T>(T value, [CallerMemberName] string propertyName = null) where T : class` | 引用类型专用重载。 |
| `OnPropertyChangedWithValue(bool)` / `(int)` / `(float)` / `(uint)` / `(double)` / `(Color)` / `(Vec2)` | 值类型与常用结构体的重载。**1.4.7 为这些类型单独提供了重载**，避免装箱并让 UI 侧能识别类型。 |
| `event PropertyChangedEventHandler PropertyChanged`（`INotifyPropertyChanged` 实现） | 绑定引擎订阅的事件。**不要自己 raise**。 |
| `public virtual void OnFinalize()` | VM 被销毁前的收尾。解除外部订阅、放引用。 |
| `protected ViewModel()` | 构造函数。派生类在此调用 `RefreshValues()` 初始化。 |

### 二、反射索引与属性访问

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public static void RefreshPropertyAndMethodInfos()` | **静态**重建全进程的属性 / 方法索引。所有 VM 共享这张表；热重载后需要它才能让新成员被发现。 |
| `public object GetPropertyValue(string name)` | 按名取值。绑定引擎的主要入口；找不到返回 null。 |
| `public object GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder)` | 带类型反馈的取值，供需要区分类型的 UI 组件使用。 |
| `public Type GetPropertyType(string name)` | 按名取属性类型。找不到返回 null。 |
| `public void SetPropertyValue(string name, object value)` | 按名设值。**类型不匹配会抛异常**——这是绑定写错时的诊断点。 |
| `public Dictionary<string, PropertyInfo> Properties { get; set; }` | 属性索引字典。 |
| `public Dictionary<string, MethodInfo> Methods { get; set; }` | 方法索引字典。 |
| `DataSourceTypeBindingPropertiesCollection(Dictionary<string, PropertyInfo>, Dictionary<string, MethodInfo>)` | 把上面两个字典打包成绑定集合。 |

### 三、命令派发

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public void ExecuteCommand(string commandName, object[] parameters)` | 按名字调用 public 方法。**找不到方法时静默失败**——命令名拼错不会有任何提示，只会表现为「按钮没反应」。 |
| `public virtual void RefreshValues()` | 重新计算所有可绑定值。在 VM 创建时调用一次；数据源变化时也可以再调。 |

### 四、路径穿透

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public object GetViewModelAtPath(BindingPath path)` | 按路径穿透嵌套 VM 树。**中间层不存在时返回 null，不抛异常**。 |
| `public object GetViewModelAtPath(BindingPath path, bool isList)` | 同上，额外标识路径末尾是否为列表。 |
| `static object GetChildAtPath(IMBBindingList obj, BindingPath subPath)`（内部路径辅助） | 处理列表索引路径。 |

### 五、辅助接口

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public interface IViewModelGetterInterface` | 声明「只读 getter」契约，供属性绑定接口使用。 |
| `public interface IViewModelSetterInterface` | 声明「可写 setter」契约，供双向绑定使用。 |
| `public static bool UIDebugMode` | **静态开关**。打开后绑定失败会输出更详细诊断。调试绑定问题的第一步。 |

## 示例

### 示例 1：标准 ViewModel，用 SetField 做变更通知

```csharp
using TaleWorlds.Library;

public class MyPanelViewModel : ViewModel
{
    private string _titleText;
    private int _count;

    public string TitleText
    {
        get => _titleText;
        set => SetField(ref _titleText, value, nameof(TitleText));
    }

    public int Count
    {
        get => _count;
        set => SetField(ref _count, value, nameof(Count));
    }

    // Prefab 里 CommandName="Increment" 的按钮会调到这里
    public void Increment()
    {
        Count = Count + 1;
    }

    public override void RefreshValues()
    {
        base.RefreshValues();
        TitleText = "初始标题";
    }
}
```

### 示例 2：初始化与命令派发

```csharp
using TaleWorlds.Library;

public class MyPanelViewModel : ViewModel
{
    private string _statusText;

    public string StatusText
    {
        get => _statusText;
        set => SetField(ref _statusText, value, nameof(StatusText));
    }

    public MyPanelViewModel()
    {
        RefreshValues();          // 初始化可绑定值
        StatusText = "就绪";
    }

    // 签名带参数的命令：Prefab 传参后由 ExecuteCommand 调用
    public void SetStatus(string text)
    {
        StatusText = text;
    }

    // 程序内调用命令（与 Prefab 点击同一条路径）
    public void RefreshPanel()
    {
        ExecuteCommand("SetStatus", new object[] { "已刷新" });
    }
}
```

### 示例 3：嵌套 VM 与路径穿透

路径中的中间层为 null 是常态，必须逐层判空。

```csharp
using TaleWorlds.Library;

public class RootViewModel : ViewModel
{
    private ChildViewModel _child;

    public ChildViewModel Child
    {
        get => _child;
        set => SetField(ref _child, value, nameof(Child));
    }
}

// 取值时逐层判空：GetViewModelAtPath 遇到缺失的段返回 null 而不抛异常
RootViewModel root = ...;
if (root != null && root.Child != null)
{
    root.Child.RefreshValues();
}
```

## 风险与边界

- **绑定名拼错静默失败**。Prefab 里写 `VM.TitelText`（拼错）不会有编译错误，UI 只是空白。调试时先开 `ViewModel.UIDebugMode`。
- **`ExecuteCommand` 找不到方法也静默失败**。按钮「没反应」的第一嫌疑就是命令名与方法名不一致。
- **`SetPropertyValue` 类型不匹配会抛**。双向绑定里把 int 绑到 string 属性，运行时会抛异常而不是降级。
- **`RefreshPropertyAndMethodInfos()` 是静态全局操作**。在运行时调用会影响所有 VM；热重载后不调它，新加的属性无法被绑定。
- **`RefreshValues()` 是虚方法**。派生类覆写时不调 `base` 会跳过基类的清理逻辑。
- **UI 线程假设**。所有通知与命令派发都在 UI 渲染线程。后台线程改字段再通知会引发竞态——必须转投主线程。
- **VM 的生命周期由屏幕栈管理**。把 VM 存进静态字段，屏幕关闭后仍持有已死对象；下一次打开新屏幕时会命中旧实例。
- **重载不是万能的**：`OnPropertyChangedWithValue` 只为 `class` / `bool` / `int` / `float` / `uint` / `double` / `Color` / `Vec2` 提供了重载；其它结构体要走 `OnPropertyChanged(nameof(X))`。
- **`Properties` / `Methods` 是可写字典**。被外部改写会让整个绑定系统指向错误的方法。

## 依赖关系

- 上游 / 提供者：
  - [Game](../../core-extra/Game) 与 [MBSubModuleBase](../../core/MBSubModuleBase) 负责把 VM 交给 UI 栈。
  - [ScreenManager](../../gui/ScreenManager) / [ScreenBase](../../gui/ScreenBase) 管理承载 VM 的屏幕。
  - [GauntletLayer](../../engine/GauntletLayer) 是真正渲染 VM 数据的 UI 层。
- 相互 / 下游：
  - VM 的 `GetViewModelAtPath` 与 `IMBBindingList`（列表绑定契约）配合处理嵌套与列表。
  - 数据的来源通常是 [Campaign](../../campaign/Campaign) 的模型，VM 只做展示层转换。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[GauntletLayer](../../engine/GauntletLayer) · [ScreenBase](../../gui/ScreenBase) · [ScreenManager](../../gui/ScreenManager) · [Game](../../core-extra/Game) · [MBSubModuleBase](../../core/MBSubModuleBase)
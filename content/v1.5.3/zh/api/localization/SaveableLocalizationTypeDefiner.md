---
title: "SaveableLocalizationTypeDefiner"
description: "本地化模块向存档系统登记 TextObject 与 Dictionary<string, TextObject> 的类型定义，号段固定为 20000。"
---

# SaveableLocalizationTypeDefiner

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class SaveableLocalizationTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`（TaleWorlds.SaveSystem）
**Source:** `bannerlord-1.5.3/TaleWorlds.Localization/SaveableLocalizationTypeDefiner.cs`

## 概述

整个 `TaleWorlds.Localization` 模块只需要一个类型登记进存档系统：`TextObject`。这个类就是那份登记。它继承 `SaveableTypeDefiner`，在基类构造里声明号段 `20000`，然后在 `DefineClassTypes` 里 `AddClassDefinition(typeof(TextObject), 1, null)`（id 1），在 `DefineContainerDefinitions` 里 `ConstructContainerDefinition(typeof(Dictionary<string, TextObject>))`。没有更多内容——总共 30 行。mod 想让自定义的可存档字段里能装 `TextObject`，靠的也是这份已有定义，而不是自己再写一个。

## 心智模型

**为什么需要它**。`TextObject` 带 `[SaveableField(1)] Value` 和 `[SaveableProperty(2)] Attributes`，但存档系统靠反射**只看见字段和属性上的特性，不看「这个类型有没有被定义」**。`SaveableTypeDefiner` 是显式登记表：`SaveManager.InitializeGlobalDefinitionContext()` 扫所有已加载程序集找 `SaveableTypeDefiner` 的子类，逐个调 `DefineClassTypes` / `DefineContainerDefinitions`，把「类型 → save id」的映射收集进全局 `DefinitionContext`。**没有登记的类型即使有 `[SaveableField]`，存进去也会失败或丢字段**——[SaveManager](../../save-system/SaveManager) 的 `CheckSaveableTypes()` 就是专门查这个的。

**两个 define 的分工**：

- `DefineClassTypes()` → `AddClassDefinition(typeof(TextObject), 1, null)`：给 `TextObject` 分配 save id `1`。第三个参数 `null` 是「自定义序列化委托」，表示用默认的反射式字段读写。
- `DefineContainerDefinitions()` → `ConstructContainerDefinition(typeof(Dictionary<string, TextObject>))`：**容器定义不带 id**，它只需要告诉存档系统「这种字典怎么读写」。`TextObject.Attributes` 声明类型是 `Dictionary<string, object>`，但官方路径上实际装的是 `Dictionary<string, TextObject>` 实例，所以这一条是必需的。

**号段 20000 的意义**。`base(20000)` 里的数字是 `saveBaseId`，决定本模块占用的 id 号段。**这是全局唯一且不可协商的**：别的 definer 若也声明 20000 段就会冲突，`DefinitionContext.GotError` 变真，存档直接失败。mod 自己的 definer 应该选一个远离官方的号段。

**加载时机**。`SaveManager.InitializeGlobalDefinitionContext()` 在 `Module.Initialize()` 的末尾被调用（`SaveManager.InitializeGlobalDefinitionContext()` 出现在 `Module.Initialize` 里 `ScreenManager` 订阅之后）。所以 definer 的存在是被自动发现的，**mod 不需要手动 new 它**。

**典型调用顺序**：游戏启动 → `SaveManager.InitializeGlobalDefinitionContext()` 反射发现本类 → 登记 `TextObject` id 1 与字典容器 → 之后任何带 `TextObject` 字段的 [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner) 才能正常存取。

**常见误用与坑**

1. **`TextObject` 的存档内容是「键 + 原文」，不是译文**。`Value` 存的是 `"{=wAgfOHio}You have lost the ownership of the alley at {SETTLEMENT}."` 这一整串。读档后 `ToString()` 会按**当前语言**重新查表——**换语言读同一个存档会看到不同语言的文本**。这是设计如此（省存储），但对「存档要固化显示内容」的场景是反直觉的。
2. **`Attributes` 的 value 类型受限**。官方登记的容器是 `Dictionary<string, TextObject>`，虽然 [TextObject](../TextObject) 的字段声明是 `Dictionary<string, object>`。存进自定义类型（比如 `MBReadOnlyList<string>`）不会自动获得存档支持——**要自己写 `ConstructContainerDefinition`**。
3. **不要重复定义 `TextObject`**。mod 里再写一个 `AddClassDefinition(typeof(TextObject), ...)` 会造成 id 冲突，`DefinitionContext.GotError` → 存档失败。用现成的。
4. **`saveBaseId(20000)` 与 `AddClassDefinition` 的 id 1 是两个不同的东西**。前者是号段起点，后者是 `TextObject` 在号段内的偏移。真正的 save id 是 `20000 + 1`。**id 一旦发布不能改**。
5. **新增字段只能用新 id**。改 `TextObject` 的 `[SaveableField]` id 等于换字段，旧存档读不回来。1.5.3 里 `TextObject` 只有 `Value(1)` 和 `Attributes(2)` 两个持久化成员。

## 怎么用

### 怎么拿到它

不要自己 `new`。它是存档系统反射枚举的类型定义器，引擎在扫描可保存类型时会一并实例化。你能碰到的公开面只有构造函数 `public SaveableLocalizationTypeDefiner() : base(20000)`（`SaveableLocalizationTypeDefiner.cs:11-14`）——`20000` 是传给基类的 id 区间起点，本地化模块独占这一段。定义内容在两个 protected override 里：`DefineClassTypes()`（`:17-20`）只注册一条 `AddClassDefinition(typeof(TextObject), 1, null)`；`DefineContainerDefinitions()`（`:23-26`）只注册 `ConstructContainerDefinition(typeof(Dictionary<string, TextObject>))`。

真正产生效果的是**基类**：`SaveableTypeDefiner` 的抽象成员是这三个（`DefineClassTypes` / `DefineContainerDefinitions` 以及构造函数里的区间 id），基类由引擎遍历调用。

### 典型用法

```csharp
// 1) 确认 TextObject 确实在存档里：[SaveableLocalizationTypeDefiner.cs:19] 注册了它，id 为 1
var gold = 1000;
dataStore.SyncData("settlement_gold", ref gold);      // 值类型照常存

// 2) TextObject 类型的字段能被存下来，是因为上面那条 AddClassDefinition
TextObject label = new TextObject("{=some_id}");
dataStore.SyncData("custom_label", ref label);

// 3) Dictionary<string, TextObject> 容器同样被声明为可保存（:25）
//    所以直接把一张 TextObject 表塞进存档是可行的

// 4) 自定义类型要进存档，走同样的写法：继承 SaveableTypeDefiner，
//    构造函数给一个和 20000 不冲突的区间 id，DefineClassTypes 里 AddClassDefinition
public class MyModTypeDefiner : SaveableTypeDefiner
{
    public MyModTypeDefiner() : base(20100) { }
    protected override void DefineClassTypes() { base.AddClassDefinition(typeof(MyModData), 1, null); }
    protected override void DefineContainerDefinitions() { }
}
```

### 最容易踩的坑

给自定义 `SaveableTypeDefiner` 选一个和 `20000`（`SaveableLocalizationTypeDefiner.cs:12`）重叠的区间 id。存档里同一个类型只能有一处定义，两处同时存在时后扫描到的会覆盖前面的映射，后果是这个类型的字段在读档时被当成另一个类型反序列化——表现为数据变成默认/null，或者直接抛类型不匹配的异常，而且堆栈指向引擎的存档层，看不出是你的 definer 撞了号。选一个明显高于 20000 的独占数字。

## 主要成员

- `SaveableLocalizationTypeDefiner()`：默认构造函数，唯一的工作是 `: base(20000)` —— **声明本模块的 save 号段起点是 20000**。基类会在构造流程中反调用两个 define 方法。
- `protected override void DefineClassTypes()`：`base.AddClassDefinition(typeof(TextObject), 1, null);`。给 `TextObject` 分配 save id `1`（即最终 save id `20001`），第三参数 `null` 表示使用默认的反射式读写委托。**这是 `TextObject` 能进存档的唯一原因。**
- `protected override void DefineContainerDefinitions()`：`base.ConstructContainerDefinition(typeof(Dictionary<string, TextObject>));`。登记字典容器的读写方式。**没有 id**，容器定义靠类型本身匹配。

**继承的语义**：两个 define 方法都是 `protected override`，`base.` 调用的是 `SaveableTypeDefiner` 的实现（`AddClassDefinition` / `ConstructContainerDefinition` 来自 `MBSaveTypeDefiner` 基座）。**继承本类并覆盖 define 来追加自己的类型是不推荐的**——那等于另起一个号段但共用 20000，容易冲突。正确做法是写自己的 `SaveableTypeDefiner` 子类并选独立号段。

## 使用示例

```csharp
// 本类的全部实现（源码即如此，共 3 个成员）：
//   public SaveableLocalizationTypeDefiner() : base(20000) { }
//   protected override void DefineClassTypes()
//       => base.AddClassDefinition(typeof(TextObject), 1, null);
//   protected override void DefineContainerDefinitions()
//       => base.ConstructContainerDefinition(typeof(Dictionary<string, TextObject>));

// 开发期自检：确认 TextObject 与它的字典容器都被正确登记
// CheckSaveableTypes 返回「有 [SaveableField]/[SaveableProperty] 但类型没定义」的清单，
// 正常情况应该是空列表 —— 非空说明某处的存档字段引用了未登记类型。
List<Type> missing = SaveManager.CheckSaveableTypes();
if (missing.Count > 0)
    Debug.Print("unregistered saveable types: " + missing.Count);

// mod 自己的 definer 必须换号段，写死 20000 会与本类冲突导致存档直接失败
public class MyModSaveableTypeDefiner : SaveableTypeDefiner
{
    public MyModSaveableTypeDefiner() : base(700000) { }   // 远离官方段
    protected override void DefineClassTypes()
        => base.AddClassDefinition(typeof(MyModSaveableData), 1, null);
    protected override void DefineContainerDefinitions()
        => base.ConstructContainerDefinition(typeof(List<MyModSaveableData>));
}

// 存档里存 TextObject：读回来是 {=id} 原文，不是译文
// Write(SyncData) 方向
public override void SyncData(IDataStore dataStore)
{
    for (int i = 0; i < this._notices.Count; i++)
        dataStore.SyncData("notice_" + i, ref this._notices[i]);
    // _notices 是 List<TextObject>，存的是每个 TextObject 的 Value + Attributes
}
```

## 风险与边界

- **存档兼容性是硬约束**。`TextObject` 的 `Value`（save id `20001`）与 `Attributes`（save id `20002`）一旦发布就不能改 id、不能改类型。想给 `TextObject` 加持久化字段只能追加新 id，且**那属于修改官方 DLL，不是 mod 该做的事**。
- **存档不存译文**。`Value` 存的是 `{=id}` + 英文 fallback。**换语言读档显示会变**。若需要固化内容，自己另存一个 `string` 字段而不是依赖 `TextObject`。
- **`Attributes` 的容器定义只覆盖 `Dictionary<string, TextObject>`**。`SetTextVariable` 的四个重载接受的 value 类型是 `TextObject` / `string` / `int` / `float`，存进去后反序列化时 `TryGetOrCreateFromObject` 会重新包装成 `TextObject`——**int/float 存回来会变成 `TextObject` 而不是 int**。跨存档往返后如果直接强转 `(int)attributes["X"]` 会 `InvalidCastException`。**统一用 `GetVariableValue(tag, out TextObject)` 读。**
- **号段冲突会让存档整体失败**，不只是这一个类型。`DefinitionContext.GotError` 为真时 `SaveManager.Save` 直接返回失败结果，不写盘。
- **加载时机**。definer 在 `SaveManager.InitializeGlobalDefinitionContext()` 时被反射发现。mod 在 `OnSubModuleLoad` 里注册的 definer 能赶上（`Module.Initialize` 里 `LoadSubModules` 在 `SaveManager.InitializeGlobalDefinitionContext()` 之前），但**运行期动态注册不会生效**。
- **无线程安全**（反射构建全局 `DefinitionContext`），只能在启动期做。

## 依赖关系

- [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner) — 基类，`AddClassDefinition` / `ConstructContainerDefinition` 的来源与号段机制
- [SaveManager](../../save-system/SaveManager) — `InitializeGlobalDefinitionContext()` 反射发现本类；`CheckSaveableTypes()` 是它的自检工具
- [TextObject](../TextObject) — 本类唯一登记的类型，`Value` 与 `Attributes` 是它仅有的两个持久化成员
- [MBSubModuleBase](../../core/MBSubModuleBase) — mod 侧写自己 definer 的挂载点

---
title: "CampaignBehaviorManager"
description: "战役系统里所有 CampaignBehavior 的中央登记与派发器：负责统一保存/加载行为数据、按类型取回行为、并在运行时增删行为，对外以 Campaign.Current.CampaignBehaviorManager 暴露。"
---
# CampaignBehaviorManager

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class CampaignBehaviorManager : ICampaignBehaviorManager`  
**Base:** `ICampaignBehaviorManager`  
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CampaignBehaviorManager.cs`

## 一句话职责

它是战役世界里所有行为（Behavior）的**登记册与派发器**：开档时把一份行为清单收进自己手里，统一为它们注册事件、在存档前收集数据、读档后回填数据，并让你随时按类型取出某个行为或动态增删行为。

## 心智模型

把一个战役当作一场长期运行的“世界模拟”，而 `CampaignBehaviorManager` 就是这台模拟背后那本**员工花名册**：

- 每名“员工”是一个 `CampaignBehaviorBase` 实例（比如 `RomanceCampaignBehavior`、`PregnancyCampaignBehavior`、`TournamentCampaignBehavior`）。它们才是真正干活的：订阅 `CampaignEvents`、处理每日 tick、更新世界状态。
- 这本花名册本身**不实现任何游戏规则**，它只负责三件事：① 持有行为清单；② 在合适的时机（开档、存档前、读档后）逐个通知这些行为做对应的事；③ 让你按类型查到某个行为。
- 它由 `Campaign` 在开档流程中创建并持有。`Campaign` 会从 `CampaignGameStarter.CampaignBehaviors`（即所有 `MBSubModuleBase` 在 `OnCampaignStart` 里 `AddBehavior` 注册进来的行为）构造出 `CampaignBehaviorManager`：

```csharp
// TaleWorlds.CampaignSystem/Campaign.cs 中的真实创建点（节选）
AddCampaignBehaviorManager(new CampaignBehaviorManager(campaignGameStarter.CampaignBehaviors));
```

- 你**永远不要**自己 `new CampaignBehaviorManager(...)`。战役启动后，通过 `Campaign.Current.CampaignBehaviorManager` 拿到这个由引擎维护的同一实例（属性的编译期类型是接口 `ICampaignBehaviorManager`）。
- 它与三层对象的关系：
  - **`CampaignBehaviorBase`**：被管理的对象。管理器只认它这个基类；具体行为通过 `RegisterEvents()` 把自己挂到事件系统，通过 `SyncData`/`OnSessionStart` 等钩子参与存档。
  - **`CampaignGameStarter`**：开档“报名处”。mod 在 `OnCampaignStart` 里把行为 `AddBehavior` 到这里；开档晚期 `Campaign` 把这些行为整批交给 `CampaignBehaviorManager`。**运行期不要再往 `CampaignGameStarter` 加行为**——那时它早已不再被读取。
  - **`ICampaignBehaviorManager`**：本类实现的接口，也是你在 `Campaign.Current` 上看到属性的类型。

## 如何获取

```csharp
// 战役进行中、任意时刻（事件回调、对话、UI 逻辑里）取管理器
ICampaignBehaviorManager manager = Campaign.Current.CampaignBehaviorManager;

// 直接取出某个具体行为（强烈建议用接口/基类类型参数）
IStatisticsCampaignBehavior stats = Campaign.Current.CampaignBehaviorManager.GetBehavior<IStatisticsCampaignBehavior>();
```

> 注意：`Campaign.Current.CampaignBehaviorManager` 是**实例属性**，不是静态字段。旧版 stub 里写的 `CampaignBehaviorManager.Current` 并不存在；直接编译会报错。

## 何时用 / 何时不要用

**用它的场景**
- 在运行期**读取**某个已实现的行为，调用其公开方法（例如取出 `IStatisticsCampaignBehavior` 记录战绩，或取出 `IDisbandPartyCampaignBehavior` 触发解散）。
- 在战役已经开始后，**动态新增**一个行为（`AddBehavior`）或**移除**一个行为（`RemoveBehavior<T>`）——例如你的 mod 在某个剧情解锁后才启用一段逻辑。
- 在调试/诊断时按类型枚举所有已注册行为（`GetBehaviors<T>`）。

**不要用它的场景（以及正确替代）**
- 想“让我的 mod 拥有一个行为”：不要自己实例化后塞进管理器。应在 `MBSubModuleBase.OnCampaignStart(Game, object)` 里把 `starterObject` 转型为 `CampaignGameStarter` 并 `AddBehavior(new MyBehavior())`。这样引擎才会把它纳入开档流程、统一存档与事件注册。
- 想直接 `new CampaignBehaviorManager(...)`：这是引擎内部构造，自己构造的实例不会被 `Campaign` 持有，也拿不到存档系统、事件系统的正确接线。
- 想“改世界状态”：不要绕过行为去改字段。行为内部才是世界变更的正当入口，外部应调用行为/Action 暴露的方法。

## 依赖图

- 上游（谁创建/喂数据）：[Campaign](../../campaign/Campaign/) 在开档时构造并持有本管理器；[CampaignGameStarter](../CampaignGameStarter/) 在 `OnCampaignStart` 阶段收集行为清单作为输入。
- 被管理对象：[CampaignBehaviorBase](../CampaignBehaviorBase/) —— 所有行为都继承自它；管理器只是它们的容器与通知者。
- 下游系统：[CampaignEvents](../CampaignEvents/) —— 管理器在 `RegisterEvents()` 时让每个行为订阅事件，并在 `OnBeforeSaveEvent` 时收集行为数据。
- 模块生命周期：[MBSubModuleBase](../../core/MBSubModuleBase/) 的 `OnCampaignStart` 是 mod 注册行为的唯一正确入口。
- 相关类：[Campaign](../../campaign/Campaign/)（世界根对象）、[QuestManager](../QuestManager/)（同样由 `Campaign` 持有的另一类子系统）。
- 约束背景：见 [模块系统](../../../architecture/module-system/) 与 [存档系统](../../../architecture/save-system/)。

## 风险

- **错误生命周期阶段注册**：在 `OnCampaignStart` 之外往 `CampaignGameStarter` 加行为无效（开档后该 starter 不再被读）。战役已开始才想加行为，必须用运行期 `Campaign.Current.CampaignBehaviorManager.AddBehavior(...)`，它会立即给新行为注册事件；但此时它**不会**重新走存档初始化（见下）。
- **`GetBehavior<T>()` 找不到时返回 `default(T)`**：对引用类型是 `null`。调用方务必判空或用 `?.`，否则拿到的 `null` 在后续访问会直接抛 `NullReferenceException`。原版代码处处用 `?.`（如 `GetBehavior<IStatisticsCampaignBehavior>()?.OnXxx()`）。
- **`ClearBehaviors()` 只清空清单，不注销事件监听**：它会把 `_campaignBehaviors` 整个清空，但**不会**移除这些行为此前注册的 `CampaignEvent` 监听器。残留监听器会持续触发，访问已失效字段时极易崩溃或脏数据。需要精准移除单个行为请用 `RemoveBehavior<T>()`，它会一并 `CampaignEventDispatcher.Instance.RemoveListeners(val)`。
- **运行期 `AddBehavior` 不参与现有存档**：`AddBehavior` 只把行为加入清单并 `RegisterEvents()`，不会补跑 `LoadBehaviorData`/`OnSessionStart`。如果一个行为依赖读档恢复的内部状态，在已加载的存档里动态加入它可能处于“未初始化”状态。
- **`InitializeCampaignBehaviors` / 重复构造会重复订阅 `OnBeforeSave`**：构造器和 `InitializeCampaignBehaviors` 都会 `AddNonSerializedListener(this, OnBeforeSave)`。对一个已存在的管理器重复调用 `InitializeCampaignBehaviors` 会注册**两份**存档前监听，导致每个行为的数据被保存两次。不要把它当普通“刷新”用。
- **`SaveableField` 数据归属**：行为数据由 `_campaignBehaviorDataStore` 承载（`[SaveableField(1)]`），由存档系统在 `OnBeforeSaveEvent` 时统一收集。自己序列化/反序列化行为状态应走行为自身的 `SyncData` 钩子，不要另起炉灶，否则会和这里的数据快照错位。

## 成员说明

### 查询行为

#### `public T GetBehavior<T>()`
按类型返回**第一个**匹配 `T` 的行为；若没有匹配项，返回 `default(T)`（引用类型为 `null`）。内部只是线性遍历 `_campaignBehaviors` 并做 `is T` 判断。
**副作用**：无（只读查询）。  
**何时调用**：运行期需要调用某个具体行为的公开方法时。

```csharp
// 出自原版 TeleportationCampaignBehavior.cs 的真实取用方式
IDisbandPartyCampaignBehavior behavior =
    Campaign.Current.CampaignBehaviorManager.GetBehavior<IDisbandPartyCampaignBehavior>();
behavior?.DisbandPartyAi(party, settlement);
```

#### `public IEnumerable<T> GetBehaviors<T>()`
返回**所有**匹配 `T` 的行为（`_campaignBehaviors.OfType<T>()`）。  
**副作用**：无。  
**何时调用**：需要枚举某基类/接口下的全部行为（例如批量通知）。

```csharp
foreach (ICampaignBehaviorBase b in Campaign.Current.CampaignBehaviorManager.GetBehaviors<ICampaignBehaviorBase>())
{
    // 仅用于诊断/反射，正常逻辑不应依赖此枚举
}
```

### 增删行为（运行期）

#### `public void AddBehavior(CampaignBehaviorBase campaignBehavior)`
把行为加入清单，并**立即**调用该行为的 `RegisterEvents()`，使其马上能接收事件。  
**副作用**：改变行为清单 + 注册事件监听。  
**何时调用**：战役已开始后动态启用一段逻辑。**不要在开档阶段用这个**——开档请走 `CampaignGameStarter.AddBehavior`。

```csharp
// 战役进行中，按需接入一个自定义行为
Campaign.Current.CampaignBehaviorManager.AddBehavior(new MyLateBehavior());
```

#### `public void RemoveBehavior<T>() where T : CampaignBehaviorBase`
移除清单中**第一个**类型为 `T` 的行为，并调用 `CampaignEventDispatcher.Instance.RemoveListeners(val)` 一并注销其事件监听。  
**副作用**：改变清单 + 注销监听。  
**何时调用**：需要彻底停用某行为、避免其监听器继续触发时。比 `ClearBehaviors` 安全。

```csharp
Campaign.Current.CampaignBehaviorManager.RemoveBehavior<MyLateBehavior>();
```

#### `public void ClearBehaviors()`
清空整个行为清单（`_campaignBehaviors.Clear()`）。  
**副作用**：清单置空，但**不注销**任何行为已注册的事件监听（见风险段）。  
**何时调用**：基本不应在 mod 代码里调用；属引擎内部/重置用途。误用会留下悬空监听器。

### 生命周期与存档

#### `public void RegisterEvents()`
遍历全部行为并逐个调用 `campaignBehavior.RegisterEvents()`，让每个行为订阅它关心的 `CampaignEvents`。  
**副作用**：大量事件订阅。  
**何时调用**：由 `Campaign` 在开档流程中调用一次（`Campaign.cs` 内 `CampaignBehaviorManager.RegisterEvents();`）。mod 一般不需要手动调用。

#### `public void LoadBehaviorData()`
遍历全部行为，从 `_campaignBehaviorDataStore` 把之前存档时收集的状态**回填**给每个行为，然后清空数据暂存。  
**副作用**：修改各行为的内部状态（恢复存档）。  
**何时调用**：由 `Campaign` 在**读档**后调用。与 `OnBeforeSaveEvent` 收集数据成对出现。

#### `public void InitializeCampaignBehaviors(IEnumerable<CampaignBehaviorBase> inputComponents)`
用一份新行为清单**替换**现有清单（`SetBehaviors`），并重新订阅 `OnBeforeSaveEvent`。  
**副作用**：替换行为集合 + 重新挂接存档前监听（重复调用会重复订阅，见风险段）。  
**何时调用**：引擎在开档时调用。mod 几乎不应直接调用；要加行为请用 `AddBehavior` 或开档期 `CampaignGameStarter.AddBehavior`。

#### `public CampaignBehaviorManager(IEnumerable<CampaignBehaviorBase> inputComponents)`（构造器）
创建管理器：收下行为清单、实例化 `_campaignBehaviorDataStore`、订阅 `OnBeforeSaveEvent`。  
**副作用**：建立与存档系统的接线。  
**何时调用**：引擎内部（`Campaign` 在开档时 `new CampaignBehaviorManager(campaignGameStarter.CampaignBehaviors)`）。mod **不要**自行构造。

## 最小真实示例

### 示例 1：开档时注册你自己的 Behavior（正确入口）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.MountAndBlade;

public class MySubModule : MBSubModuleBase
{
    public override void OnCampaignStart(Game game, object starterObject)
    {
        base.OnCampaignStart(game, starterObject);

        // starterObject 就是 CampaignGameStarter；开档期往这里加行为
        if (starterObject is CampaignGameStarter starter)
        {
            starter.AddBehavior(new MyCampaignBehavior());
        }
    }
}
```

### 示例 2：运行期取出已有 Behavior 并调用其方法

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 在事件回调 / 对话 / UI 逻辑中
IStatisticsCampaignBehavior stats =
    Campaign.Current.CampaignBehaviorManager.GetBehavior<IStatisticsCampaignBehavior>();

// GetBehavior 找不到时返回 null，务必判空
if (stats != null)
{
    stats.OnPlayerAcceptedRansomOffer(ransomPrice);
}
```

### 示例 3：战役进行中动态启用 / 停用一段逻辑

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 启用：立即注册事件，马上生效
Campaign.Current.CampaignBehaviorManager.AddBehavior(new MyLateBehavior());

// 停用：移除行为并注销其事件监听（比 ClearBehaviors 安全）
Campaign.Current.CampaignBehaviorManager.RemoveBehavior<MyLateBehavior>();
```

## 跨版本提示

- `1.3.0` → `1.3.15` → `1.4.5`：本类的公开 API（`GetBehavior` / `GetBehaviors` / `AddBehavior` / `RemoveBehavior` / `ClearBehaviors` / `RegisterEvents` / `LoadBehaviorData` / `InitializeCampaignBehaviors`）在三版中保持一致，仅有反编译命名与命名空间书写风格差异（1.4.5 起使用文件级 `namespace` 与字段风格微调），行为语义未变。
- 取用入口始终是 `Campaign.Current.CampaignBehaviorManager`（属性类型为 `ICampaignBehaviorManager`），无静态 `Current` 字段。

## 导航

- ↑ 父级：[campaign-ext 索引](../)
- ↔ 同级：[CampaignBehaviorBase](../CampaignBehaviorBase/) · [CampaignGameStarter](../CampaignGameStarter/) · [CampaignEvents](../CampaignEvents/) · [QuestManager](../QuestManager/)
- 相关类：[Campaign](../../campaign/Campaign/)（世界根）· [MBSubModuleBase](../../core/MBSubModuleBase/)（行为注册入口）· [模块系统](../../../architecture/module-system/) · [存档系统](../../../architecture/save-system/)

## 参见

- [Campaign](../../campaign/Campaign/) — 持有本管理器，世界根对象
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — 被管理的所有行为基类
- [CampaignGameStarter](../CampaignGameStarter/) — 开档阶段注册行为的入口
- [CampaignEvents](../CampaignEvents/) — 行为通过它收发战役事件
- [MBSubModuleBase](../../core/MBSubModuleBase/) — `OnCampaignStart` 是 mod 接入行为的钩子

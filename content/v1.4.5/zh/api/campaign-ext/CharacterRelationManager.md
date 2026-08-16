---
title: "CharacterRelationManager"
description: "Campaign 持久化英雄基础关系的管理器：以 Hero.Id 派生的哈希键对存储关系，提供底层读写和清理入口；改变关系应优先使用 ChangeRelationAction。"
---
# CharacterRelationManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterRelationManager`
**Base:** `System.Object`
**File:** `TaleWorlds.CampaignSystem/CharacterRelationManager.cs`

## 一句话职责

它在 `Campaign` 中保存英雄之间的**基础个人关系值**，以由 `Hero.Id` 派生的哈希键对提供读写和注销清理；外交模型会在此基础上计算 mod 通常真正关心的 effective relation。

## 心智模型

把这个类型分成三层看：

1. **存储层：** `Campaign` 创建并持有一个 `CharacterRelationManager`。管理器内部的 `HeroRelations` 用 `Dictionary<long, Dictionary<long, int>>` 保存关系；外层和内层使用由 `Hero.Id.GetHashCode()` 得到的 `long` 键，并按 `Hero.Id` 大小排序，所以 `(A, B)` 与 `(B, A)` 是同一条无方向关系。这里保存的是哈希键而不是 `Hero` 引用或可供 mod 自己分配的稳定 ID；没有记录的关系读取为 `0`，写入 `0` 会删除记录。
2. **业务计算层：** `CharacterRelationManager.GetHeroRelation` 只读存储的基础值。`Hero.GetRelation` 走 `Campaign.Current.Models.DiplomacyModel.GetEffectiveRelation`，可能叠加宗族领袖、外交模型或其他游戏规则；不要用基础值冒充最终关系判断。
3. **变更编排层：** `ChangeRelationAction` 才是 mod 改变关系的正常入口。它会根据 DiplomacyModel 找 effective heroes，对正向变化应用增益因子，把结果夹到 `-100..100`，写入基础关系，并广播 `CampaignEvents.HeroRelationChanged`。管理器本身的 setter 不做这套编排。

这是 Campaign 层的持久数据服务，不是可替换的 Model，也不是事件总线。`CharacterRelationManager.Instance` 只是 `Campaign.Current.CharacterRelationManager` 的静态快捷入口；战役外访问会因为 `Campaign.Current` 为空而失败。

生成 stub 还误导性地列出了 `CharacterRelationManager.Current`，以及实例 `GetRelation`/`SetRelation`。源码没有 `Current`；后两个方法属于内部嵌套类 `HeroRelations`，不是 public manager 的 mod API。

## 谁持有，何时可用

- **创建：** `Campaign` 构造函数执行 `new CharacterRelationManager()`，并把它放入 `[SaveableProperty(12)] public CharacterRelationManager CharacterRelationManager { get; private set; }`。mod 不应自己 `new` 一个脱离当前 Campaign 的管理器；那只会产生一份没有被游戏使用或保存的孤立字典。
- **正常访问：** 在确认 `Campaign.Current != null` 且战役对象已经启动后，用 `Campaign.Current.CharacterRelationManager` 获取持有者，或调用静态 `CharacterRelationManager.GetHeroRelation`。对英雄本身的常规查询优先使用 `Hero.GetRelation` / `GetBaseHeroRelation`。
- **读档：** Campaign 的 SaveSystem 对象图包含 `CharacterRelationManager`，其 `_heroRelations` 和内部 `_relations` 带 `[SaveableField]`。读档时先恢复对象管理器，再调用 `CharacterRelationManager.AfterLoad()`，之后才分发 Campaign 的加载事件。
- **英雄注销：** `CharacterRelationCampaignBehavior` 监听 `OnHeroUnregisteredEvent`，调用 `Campaign.Current.CharacterRelationManager.RemoveHero(hero)`，删除该英雄作为任一端的关系。mod 不应自行把仍在 Campaign 对象管理器中的英雄传给 `RemoveHero`。

## 公开成员与调用时机

### `public static CharacterRelationManager Instance { get; }`

返回当前 `Campaign` 的管理器实例，实际实现是 `Campaign.Current.CharacterRelationManager`。它只适合在战役生命周期已经建立的回调中使用，例如 `CampaignBehaviorBase.RegisterEvents` 注册后收到 Campaign 事件时；不能在主菜单、加载早期或没有 `Campaign.Current` 的自定义场景调用。

```csharp
Campaign campaign = Campaign.Current;
if (campaign == null || !campaign.GameStarted)
    return;

CharacterRelationManager manager = campaign.CharacterRelationManager;
```

### `public static int GetHeroRelation(Hero hero1, Hero hero2)`

读取两名英雄在该管理器中的基础关系。关系不存在时返回 `0`，参数相同也不应被当作有意义的自我关系。该方法不经过 `DiplomacyModel.GetEffectiveRelation`，所以适合检查存储的基础值、诊断 Action 结果或实现明确要求 base relation 的逻辑；用于 UI、外交判断或玩家体验时通常应调用 `hero1.GetRelation(hero2)`。

```csharp
Hero mainHero = Hero.MainHero;
Hero derthert = Hero.Find("lord_derthert");
if (Campaign.Current != null && mainHero != null && derthert != null && mainHero != derthert)
{
    int storedRelation = CharacterRelationManager.GetHeroRelation(mainHero, derthert);
    int effectiveRelation = mainHero.GetRelation(derthert);
}
```

### `public static void SetHeroRelation(Hero hero1, Hero hero2, int value)`

直接替换存储的基础关系。它只拒绝 `hero1 == hero2`（通过断言），不调用 `DiplomacyModel`，不把值夹到模型的 min/max，也不触发 `HeroRelationChanged`。值为 `0` 会移除该 ID 对；非零值会写入嵌套字典。

这是底层存储边界，不是“给两个英雄加关系”的 Action 替代品。除非是在明确控制迁移/恢复的内部代码中，否则 mod 不应直接调用它；直接写会让技能成长、通知、关系变化监听器和 effective-hero 映射全部缺席。

```csharp
Hero a = Hero.MainHero;
Hero b = Hero.Find("lord_derthert");
if (a != null && b != null && a != b)
{
    // 直接替换基础关系：不经过 DiplomacyModel、不夹紧 -100..100、不广播 HeroRelationChanged。
    // 一般 gameplay mod 不应直接调用；需要改变关系请用 ChangeRelationAction。
    CharacterRelationManager.SetHeroRelation(a, b, 10);
}
```

### `public void AfterLoad()`

读档初始化钩子。仅当 `MBSaveLoad.LastLoadedGameVersion < v1.1.0` 时，它才调用内部 `HeroRelations.ClearOldData()`：遍历当前 `CampaignObjectManager.AliveHeroes`，删除存档中不再对应存活英雄的键。它不是每次读档都重算关系，也不是 mod 用来手动“刷新关系”的方法；由 Campaign 的加载顺序调用。

```csharp
// 由 Campaign 加载顺序调用；只在旧存档 (< v1.1.0) 时才触发 ClearOldData。
// mod 不应手动调用，也不要把它当作“刷新关系”的入口。
```

### `public void RemoveHero(Hero deadHero)`

从关系图中删除一个英雄作为 key 或 value 的所有记录。官方 `CharacterRelationCampaignBehavior.OnHeroUnregistered` 在英雄从对象系统注销时调用它。它没有事件广播，也不会执行死亡、替换英雄或其他世界变更；不要用它代替 `KillCharacterAction`，也不要对仍在使用的英雄调用，否则会静默丢失关系并在后续行为中表现为 `0`。

```csharp
// 官方注销清理路径（CharacterRelationCampaignBehavior.OnHeroUnregisteredEvent）：
Hero deadHero = null; // 已从 CampaignObjectManager 注销的英雄
if (deadHero != null)
{
    Campaign.Current.CharacterRelationManager.RemoveHero(deadHero);
}
```

### 构造函数与内部成员

`public CharacterRelationManager()` 只创建空的 `HeroRelations` 字典。它存在于游戏的 Campaign 构造流程中，但 public 可见不等于 mod 应自行创建。`HeroRelations.GetRelation`、`SetRelation`、`Remove`、`ClearOldData` 和 `_relations` 都是内部/私有实现；不要反射访问，也不要保存其字典引用。

## 应该用 Action，还是直接写？

| 目标 | 正确入口 | 原因 |
|------|----------|------|
| 读取玩家或两个英雄当前体验到的关系 | `hero1.GetRelation(hero2)` | 经过 `DiplomacyModel`，不是只看原始字典。 |
| 读取明确的基础个人关系 | `CharacterRelationManager.GetHeroRelation(hero1, hero2)` 或 `hero1.GetBaseHeroRelation(hero2)` | 两者都针对 base relation 语义；前者直接读存储，后者走 Model 的 base 入口。 |
| 让玩家与英雄获得/失去关系 | `ChangeRelationAction.ApplyPlayerRelation(hero, delta, ...)` | 经过玩家入口、模型修正、边界处理和关系变化事件。 |
| 让两个指定英雄获得/失去关系 | `ChangeRelationAction.ApplyRelationChangeBetweenHeroes(hero1, hero2, delta, ...)` | 经过 effective-hero 映射并广播 `HeroRelationChanged`。 |
| 记录特定的存档迁移值 | 仅在受控的加载/迁移代码中使用底层 setter | 必须自行承担边界、事件和兼容性；一般 gameplay mod 不应走此路。 |

`Hero.SetPersonalRelation(otherHero, value)` 虽然 public，但它是低层“设置绝对值”入口：源码先按 `Campaign.Current.Models.DiplomacyModel.MinRelationLimit`/`MaxRelationLimit` 夹紧，再调用 `CharacterRelationManager.SetHeroRelation`，仍不会广播 `HeroRelationChanged`。因此，想改变游戏关系时使用 `ChangeRelationAction`，不要把 `SetPersonalRelation` 当作 Action 的同义词。

## ChangeRelationAction 的完整边界

`ChangeRelationAction.ApplyInternal` 的顺序是：

1. 正向 `relationChange` 先交给 `Campaign.Current.Models.DiplomacyModel.GetRelationIncreaseFactor`，再使用随机舍入；负向变化不走这一步。
2. 通过 `GetHeroesForEffectiveRelation` 把原始英雄映射到实际承担关系的 effective heroes。
3. 读取基础关系并累加 delta，然后用 `MBMath.ClampInt(value, -100, 100)` 限制最终值。
4. 对 effective hero 调用 `SetPersonalRelation` 写入管理器。
5. 调用 `CampaignEventDispatcher.Instance.OnHeroRelationChanged`，把 effective/original heroes、delta、通知标志和 `ChangeRelationDetail` 传给 `CampaignEvents.HeroRelationChanged` 的监听器。

因此 `ApplyPlayerRelation` 与 `ApplyRelationChangeBetweenHeroes` 的参数是“变化量”，不是最终绝对值。`ApplyPlayerRelation` 的 `affectRelatives` 参数在 1.3.15/1.4.5 这份实现中没有继续传入 `ApplyInternal`；不要根据这个参数假定会自动改动亲属关系。

## 关系事件与真实监听路径

`CampaignEvents.HeroRelationChanged` 的真实签名是：

```csharp
IMbEvent<Hero, Hero, int, bool,
    ChangeRelationAction.ChangeRelationDetail, Hero, Hero>
```

前两个英雄是 effective heroes，最后两个是调用 Action 时的 original heroes。事件只表示 Action 已经决定并写入了一次关系变化；它不是“任何底层 setter 都会触发”的通用 property-changed 事件。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class RelationObserver : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroRelationChanged.AddNonSerializedListener(this, OnRelationChanged);
    }

    private void OnRelationChanged(
        Hero effectiveHero,
        Hero effectiveOther,
        int relationChange,
        bool showNotification,
        ChangeRelationAction.ChangeRelationDetail detail,
        Hero originalHero,
        Hero originalOther)
    {
        if (Campaign.Current == null || effectiveHero == null || effectiveOther == null)
            return;

        // 观察 Action 已提交的 delta；不要在这里再次 SetHeroRelation。
    }

    public override void SyncData(IDataStore dataStore)
    {
        // 保存 mod 自己的关系派生数据，而不是保存 CharacterRelationManager 的字典。
    }
}
```

官方 `CharacterRelationCampaignBehavior` 也在 `RegisterEvents` 订阅该事件，并在正向变化时通知技能成长系统；同一个 Behavior 还监听 `OnHeroUnregisteredEvent` 清理关系。因此 mod 若需要同步 UI、声望或自己的派生状态，应监听事件；不要通过轮询字典猜测变化。

## 存档边界与坏档风险

- **管理器本身会保存：** `Campaign.CharacterRelationManager` 带 `[SaveableProperty(12)]`，`CharacterRelationManager._heroRelations` 和 `HeroRelations._relations` 各带 `[SaveableField(1)]`。两版 `SaveableCampaignTypeDefiner` 还分别注册 `CharacterRelationManager` 类型 31 与 `HeroRelations` 类型 186。`Campaign` 的自动收集器把管理器加入存档对象图，所以关系值不是临时缓存。
- **存的是哈希键对和整数：** 关系图不保存 `Hero` 对象引用，而是保存由 Hero ID 派生的 `long` 键。不要把这个内部键当作跨系统的 Hero 标识，也不要把自己的对象塞进字典。读档后必须让官方对象注册/加载顺序完成，再通过 `Hero.Find` 或其他合法入口取得当前 Hero。
- **加载顺序敏感：** 1.3.15 中 `Campaign.OnGameLoaded` 先执行 `ObjectManager.PreAfterLoad`/`AfterLoad`，再调用 `CharacterRelationManager.AfterLoad`，然后才分发 `OnGameEarlyLoaded`/`OnGameLoaded`；1.4.5 保持同一关系管理器顺序。不要在更早的构造或存档字段恢复阶段读取 `Campaign.Current` 的 effective relation。
- **旧存档清理有条件：** `AfterLoad` 只对早于 v1.1.0 的存档调用 `ClearOldData`。对现代存档，官方清理路径是英雄注销事件；不要自行假定每次读档都会删除所有 dead/unregistered Hero 的键。
- **不要修改 Saveable ID/结构：** 通过反射替换 `_relations`、改变字段类型、写入不受边界约束的值或把自定义对象塞进官方字典，会破坏官方 SaveSystem 的类型/字段契约，导致读档失败或后续关系判断异常。
- **不要把关系事件当存档提交：** `HeroRelationChanged` 只传 delta 和上下文；mod 自己的持久派生状态仍须通过 `CampaignBehaviorBase.SyncData(IDataStore)` 保存，并在加载完成后用当前 Hero 重新建立引用。

## 错误阶段与常见失败

- **Campaign 外调用：** `Instance`、`GetHeroRelation` 和 `SetHeroRelation` 都最终依赖 `Campaign.Current`。主菜单、战斗 Mission 或 Campaign 尚未启动时调用，可能直接 `NullReferenceException`。
- **传入 null 或未注册 Hero：** 管理器会访问 `hero.Id`；未注册对象、已注销对象或 null 不属于有效关系端点。先从 `Hero.MainHero`、`Hero.Find`、`Hero.AllAliveHeroes` 等真实对象集合获取，并检查生命周期。
- **把 base 当 effective：** 直接读取管理器得到的值可能与 `Hero.GetRelation` 不同；用错会导致外交、对话、UI 和模型判断不一致。
- **直接 SetHeroRelation/SetPersonalRelation：** 会绕过 `ChangeRelationAction` 的有效英雄映射、正向增益修正、事件广播和通知，造成“数值变了但相关系统没收到变化”的隐性状态错误。
- **错误使用 RemoveHero：** 对活英雄调用会删除其全部关系且没有恢复事件；对已死亡英雄自己清理又可能与官方注销流程竞态。让 `CharacterRelationCampaignBehavior` 的注销事件负责它。
- **在关系事件中重入写入：** 监听器里再次无条件调用关系 setter/Action，会递归触发事件或重复改变 delta。只在明确的、有限的业务条件下发起一次新 Action，并防止循环。
- **把 `affectRelatives` 当成自动级联：** 当前源码的 `ApplyPlayerRelation` 没有使用它完成亲属写入；需要亲属关系变化时必须按业务规则逐个调用合适的 Action，并接受每次事件/模型计算。

## 真实示例：从 Campaign/Hero 读取并安全改变关系

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

Campaign campaign = Campaign.Current;
Hero mainHero = Hero.MainHero;
Hero derthert = Hero.Find("lord_derthert");

if (campaign != null && campaign.GameStarted && mainHero != null && derthert != null && mainHero != derthert)
{
    CharacterRelationManager manager = campaign.CharacterRelationManager;
    int baseRelation = CharacterRelationManager.GetHeroRelation(mainHero, derthert);
    int effectiveRelation = mainHero.GetRelation(derthert);

    // 这是变化量；Action 会负责 effective hero、夹紧和 HeroRelationChanged。
    ChangeRelationAction.ApplyRelationChangeBetweenHeroes(mainHero, derthert, 5, showQuickNotification: false);
}
```

真实获取路径是 `Campaign.Current` → `campaign.CharacterRelationManager`、`Hero.MainHero`/`Hero.Find(stringId)`；真实变更路径是 `ChangeRelationAction.ApplyRelationChangeBetweenHeroes`。如果只想观察而不触发事件，读取 `baseRelation` 或 `effectiveRelation`；不要为了读取而调用 setter。

## 依赖关系

### 上游

- [Campaign](../../campaign/Campaign)：创建、持有并保存 `CharacterRelationManager`；决定读档后 `AfterLoad` 的时机。
- [Hero](../../campaign/Hero)：提供真实关系端点；`GetRelation`、`GetBaseHeroRelation`、`SetPersonalRelation` 和 friend/enemy 判断都会回到该管理器或 DiplomacyModel。
- [CampaignObjectManager](../CampaignObjectManager)：维护 Alive/registered Hero 集合，供旧存档清理和英雄注销流程使用。
- [DiplomacyModel](../DiplomacyModel)：计算 effective relation、关系上下限和正向关系增益。

### 下游

- [ChangeRelationAction](../ChangeRelationAction)：正常的关系变化事务入口。
- [CampaignEvents](../CampaignEvents)：发布 `HeroRelationChanged` 与 `OnHeroUnregisteredEvent`，让 Behavior 和其他系统观察变化/清理对象。
- [CharacterRelationCampaignBehavior](../CharacterRelationCampaignBehavior)：官方监听器，负责技能成长响应及注销清理。
- [IDataStore](../IDataStore) / [SaveManager](../../save-system/SaveManager)：管理器关系图由官方 Campaign 存档对象图保存；mod 自己的派生状态走 Behavior 的 `SyncData`。

## 1.3.15 与 1.4.5 对照

- 两版的公开关系边界一致：`Instance`、`GetHeroRelation`、`SetHeroRelation`、`AfterLoad`、`RemoveHero`；`HeroRelations` 仍是内部类，关系仍以按 `Hero.Id` 排序的哈希键对存储，缺失为 0，写 0 删除。
- 两版都把 `Campaign.CharacterRelationManager` 标为 `[SaveableProperty(12)]`，管理器的 `_heroRelations` 与内部 `_relations` 都用 `[SaveableField(1)]`；读档后仍先对象加载、再关系清理、再事件分发。
- 两版 `ChangeRelationAction` 都先处理 DiplomacyModel 的 effective heroes，再夹紧 `-100..100`、写入并广播七参数 `HeroRelationChanged`；1.4.5 主要是文件级命名空间和局部变量写法变化。
- 两版 `Hero.SetPersonalRelation` 都只做 DiplomacyModel min/max 夹紧后写底层管理器，不替代 Action 事件链；`Hero.GetRelation` 都返回 DiplomacyModel 的 effective relation。

## 导航

### ↑ Parent

- [Campaign-ext API](../)
- [SDK 总览](../../../architecture/sdk-overview)

### ↔ Sibling

- [ChangeRelationAction](../ChangeRelationAction)
- [CampaignEvents](../CampaignEvents)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
- [CharacterRelationCampaignBehavior](../CharacterRelationCampaignBehavior)
- [DiplomacyModel](../DiplomacyModel)

### Related / 双向返回

- [Campaign](../../campaign/Campaign)：管理器的持有者和存档根路径。
- [Hero](../../campaign/Hero)：关系查询、绝对值低层写入和 effective relation 语义。
- [CampaignObjectManager](../CampaignObjectManager)：Hero 注册/注销与旧存档清理。
- [IDataStore](../IDataStore)：mod 自己的持久化入口，不要复制官方关系字典。
- [SaveManager](../../save-system/SaveManager)：存档总管；关系管理器由 Campaign 对象图间接保存。

### ↓ Children

- 没有公开子页面；内部 `HeroRelations` 不对 mod 暴露。需要合法关系端点和查询语义时，回到 [Hero](../../campaign/Hero)；不要为内部字典建立反射式子页。

## 源码依据

- 1.3.15：`R:\Bannerlord\bannerlord-1.3.15\TaleWorlds.CampaignSystem\CharacterRelationManager.cs`（关系字典、公开成员、`AfterLoad`、`RemoveHero`）；`Campaign.cs`（属性、构造、加载与 SaveSystem 对象图）；`SaveableCampaignTypeDefiner.cs`（类型注册）；`Hero.cs`；`Actions\ChangeRelationAction.cs`。
- 1.4.5 对照：`R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem\CharacterRelationManager.cs`、同目录下的 `Hero.cs`、`Campaign.cs`、`SaveableCampaignTypeDefiner.cs`，以及 `R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.Actions\ChangeRelationAction.cs`。
- 调用链：两版 `CampaignEvents.cs`/`CampaignEventDispatcher.cs` 的 `HeroRelationChanged`，以及 1.3.15 的 `CampaignBehaviors\CharacterRelationCampaignBehavior.cs`、1.4.5 的 `TaleWorlds.CampaignSystem.CampaignBehaviors\CharacterRelationCampaignBehavior.cs` 中的关系事件订阅和 `OnHeroUnregistered` 清理。

## 参见

- ↑ [Campaign-ext API](../)
- ↔ [ChangeRelationAction](../ChangeRelationAction) · [CampaignEvents](../CampaignEvents) · [DiplomacyModel](../DiplomacyModel)
- ↓ [Hero](../../campaign/Hero) · [Campaign](../../campaign/Campaign) · [SaveManager](../../save-system/SaveManager)

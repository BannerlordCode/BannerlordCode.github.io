# brief · b10-building（v1.4.6/zh 手写深页写作线）

- 批次：批 10
- 页面：`content/v1.4.6/zh/api/campaign/Building.md`
- 源文件：`TaleWorlds.CampaignSystem/Settlements/Buildings/Building.cs`（325 行）
- 锚表：`tools/_verify/_tmp/anchors/b10-building.txt`（27 个锚点，派单前生成）
- dup 检查：`find <root> -name Building.cs | wc -l` → **1**（规避 `ambiguous` 门禁洞）
- 派单时刻：2026-10-08T01:31Z
- 落盘理由（boss #22603）：让「brief 不写未经测量的断言」可机械检查。

---

## 题头三行（命令实测值，非断言）

```
**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Buildings`
**Type:** `public class Building`
**Source:** `TaleWorlds.CampaignSystem/Settlements/Buildings/Building.cs`
```

实测输出：
```
12:	public class Building
（wc -l = 325, anchors = 27）
```

## 内容提示（**指令式**写法 —— 描述去找什么，不断言有什么）

> 请自己读源码后确定要写哪些成员。这一页请写清三件事：
> 1. 它代表聚落里的**什么**，以及它在「定义 / 实例」这对关系中处于哪一侧（另一侧的定义对象在 `../Settlement` 之外的建筑类型定义页，若尚未入库则不链）。
> 2. 它的**等级与在建进度**是怎么表达的，以及**哪些状态变化会派发事件** —— mod 想响应建筑变化时，应当挂在哪一类事件上。
> 3. **坑**：mod 改建筑状态时，哪些写法会绕过事件派发或让进度与实际不一致。

**自查**：本节为指令式（「写清 / 请写」），**不断言**该类具有任何具体能力、成员或行为。仅出现的名字在「题头实测值」与「链接白名单」中，均有命令支撑。

## 门禁口径（预置，避免 worker 去读校验脚本）

- `checked` = 页面里所有 `文件.cs:N` 形态引用（写全文件名），全文任何位置都算，表格行内也算；要求 `checked ≥ 关键成员表行数`
- `J6=deep_pass` 硬要求 = `## 参见` 里 ≥2 条 markdown 链接
- `J7` = 全文不得出现 `自动生成` / `Auto-generated stub` / `<!-- v*-skeleton -->` / `是 TaleWorlds.X 下的公开类型` / `阅读时先通过属性了解状态`
- `J8` 正文 > 2500 字节；`J9` csharp 块 ≥3 有效行含真实调用；`J10` 链接只在 `## 参见`/`## 导航`；`J11` 叶子目标不带尾斜杠

## 链接白名单（已逐条实测存在）

`../Settlement` `../Town` `../Village` `../Clan` `../Kingdom` `../Hero` `../MobileParty` `../PartyBase` `../Campaign` `../ItemRoster` `../TroopRoster` `../CampaignObjectManager` `../ExplainedNumber` `../CampaignTime` `../_index` `../../campaign-ext/MBObjectBase` `../../campaign-ext/MBObjectManager` `../../core-extra/Game`

## 硬约束（磁盘可判定的后果）

> **本轮结束时若 `C:/WorkSpace/Bannerlord/BannerlordCode.github.io/content/v1.4.6/zh/api/campaign/Building.md` 不存在，则本轮视为未完成 —— 直接回报「未完成」并说明卡点。**

## 边界

- leaf-only：不动任何 `_index.md`；不 `git add`/`git commit`；不改 `tools/**`
- **第一个动作必须是创建文件**
- 若源码与 brief 冲突，**以源码为准**并在回报里指出

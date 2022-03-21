import { useState } from "react";
import Header from "./components/Layout/Header";
import PartOne from "./components/Body/PartOne";
import PartTwo from "./components/Body/PartTwo";
import CookieModal from "./components/UI/CookieModal";
import FreeDemoModal from "./components/UI/FreeDemoModal";
function App() {
	const [freeDemoModalState, setFreeDemoModalState] = useState(false);
	const openFreeDemoModalHandler = () => {
		document.body.style.overflow = "hidden";  /* de-activates scroll on body while modal is open */
		setFreeDemoModalState(true);
	};
	const closeFreeDemoModalHandler = () => {
		document.body.style.overflow = "";  /* re-activates scroll on body */
		setFreeDemoModalState(false);
	};
	return (
		<div>
			<Header />
			<CookieModal />
			{freeDemoModalState && (
				<FreeDemoModal onCloseFreeDemoModal={closeFreeDemoModalHandler} />
			)}
			<PartOne onOpenFreeDemoModal={openFreeDemoModalHandler} />
			<PartTwo />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				repudiandae accusamus optio, expedita sapiente itaque voluptatem nulla
				aliquid quam illum, reprehenderit velit. Nesciunt, corrupti expedita?
				Nihil eius odit recusandae reprehenderit, esse quo doloribus! Nulla,
				possimus numquam, non dolor tempora corporis maxime sapiente ipsa
				voluptas voluptatem tenetur iure asperiores. Quos, alias temporibus
				adipisci doloremque eum, iure incidunt, minus atque harum magni eligendi
				ea aliquam blanditiis quod fugit at autem quas ut repudiandae cumque
				dolorum odio totam! Eaque amet, ipsa vel non nobis, eos illum optio
				eligendi delectus hic pariatur? Excepturi ratione eum culpa enim unde
				eaque sint nesciunt sed maiores, amet, impedit magni, nam animi. Ducimus
				fugit commodi ab nam, amet adipisci omnis vel quia? Laudantium
				consequatur, nisi fugiat aperiam sit ipsa non incidunt rerum, tenetur
				optio ab provident. Ea nam earum repellendus aliquid rem nobis
				distinctio, ut quisquam aut. Aspernatur eveniet, tenetur pariatur quasi
				suscipit nam recusandae atque omnis optio magni rerum, ut officia qui
				enim placeat, ipsa odit impedit? Eius possimus iste quis. Voluptatibus
				dolores tenetur dolore animi eaque eligendi, dolor deserunt quisquam
				praesentium possimus cum libero repellendus asperiores enim dolorum
				repudiandae necessitatibus hic iusto aperiam, adipisci officiis, ratione
				pariatur culpa! Dolor quisquam veritatis at asperiores libero nemo
				excepturi veniam qui possimus, amet hic optio quidem, distinctio eaque
				laborum vel ab aliquam dolorum, iusto ipsum pariatur reiciendis fugiat
				praesentium beatae. Maiores laudantium, numquam dolorum voluptatum ab
				tempore. Accusantium blanditiis maxime exercitationem repudiandae aut
				sunt aliquam tempore ipsum cum quam facilis est, voluptatibus laborum
				tenetur dignissimos libero quos repellendus dolore hic quod natus! Quas
				nihil id, tempore dolore, voluptas impedit, magni ad ut quasi ullam odit
				corporis culpa corrupti adipisci alias beatae rerum quod. Repellat
				similique accusantium facere, a, dolorum magni id ab nihil sunt officia
				laborum dolorem excepturi et? Odit, ipsa adipisci perferendis sequi
				consequatur vel amet neque harum asperiores nobis ea quaerat dolorum
				labore praesentium maxime sint dolorem magnam reprehenderit laborum sed
				veritatis odio animi facere dolor. Ab quaerat eos iure, cumque labore
				quas ipsa, ipsum quae saepe numquam optio deleniti ut natus eaque
				nesciunt quo repudiandae asperiores minima fuga placeat ipsam qui nam.
				Culpa qui accusantium molestiae est quae itaque, dolorem quisquam ex
				dignissimos nobis inventore similique ad consequuntur maxime eum aperiam
				possimus aut eligendi architecto tenetur numquam aspernatur nulla
				incidunt? Ex totam nobis ab eius expedita ea, quia quas officiis! Neque
				sunt rem asperiores id itaque a? Possimus accusamus repellendus
				temporibus modi vero, ipsam consectetur esse.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor
				officia, vitae blanditiis fugiat temporibus accusantium excepturi eum,
				unde perferendis eaque amet. Architecto omnis impedit quidem aut dolorum
				unde veritatis illo et tempora, illum asperiores quis accusamus iure
				facilis? Nemo omnis, in aliquam est dolorum natus sed magnam doloremque
				earum quae? Beatae, quo, facilis vitae aliquam aspernatur quisquam ullam
				nam ut sint magnam id repudiandae debitis cumque quam laudantium
				accusamus quidem odit! Suscipit aliquam expedita officiis labore
				reiciendis vel esse voluptates iusto itaque. Numquam in tenetur quisquam
				voluptas voluptatibus eligendi doloremque nemo harum, natus saepe veniam
				corrupti expedita incidunt? Autem beatae incidunt harum vero unde cum
				molestiae. Quas fugiat distinctio sapiente explicabo neque incidunt qui
				ex, dicta eligendi. Quas numquam magni expedita. Eum, molestias dolorum
				ad laboriosam rem sed delectus beatae, voluptas asperiores quis nostrum
				quas quo incidunt quasi voluptatem odit? Blanditiis magni quod labore
				quidem, aperiam ad facere maxime reiciendis, rerum dolore repellat
				mollitia ullam totam eaque suscipit eveniet repudiandae impedit ipsa
				laborum vitae sunt odit ex, animi optio! Corporis, eos commodi? Saepe
				nemo quos repellat velit odio, quo consectetur tenetur eligendi, atque
				deleniti ipsum itaque maxime labore corrupti repudiandae dolor facilis
				error enim eius aliquam eum. Magnam voluptatibus optio, odio quo
				reiciendis atque unde ratione deleniti laborum, voluptatum, rem
				blanditiis pariatur illo non ut quisquam corporis labore molestias est
				dolore soluta. Voluptatibus, assumenda a ab veritatis repellat
				doloremque iusto sint dolorum sequi facere! Nobis ex adipisci minima,
				perferendis, nostrum earum hic ipsum ab libero a esse, possimus enim?
				Tempore et voluptatum vitae deleniti temporibus aperiam saepe molestias
				tempora nemo enim! Saepe nemo, reprehenderit facere ducimus porro
				dolorem? Quos quasi, saepe cupiditate inventore sit doloremque beatae
				necessitatibus. Ad consequuntur numquam, tempore accusantium, quae minus
				similique vero earum ratione harum, maxime animi inventore! Possimus,
				unde, consequuntur quis ipsam in dicta nulla assumenda quas illo
				corporis aliquam perferendis qui illum cum deserunt ab dignissimos quae
				delectus libero, vero dolor? Fugit veniam ex libero quis tempora laborum
				eveniet unde quo alias, nobis iure et, exercitationem blanditiis vero
				hic ullam consectetur mollitia explicabo totam suscipit accusantium
				ipsam reiciendis deleniti atque. Optio quibusdam, mollitia magni placeat
				nemo eius incidunt aperiam temporibus fugiat repellendus nihil
				necessitatibus nostrum quo quaerat consequuntur nulla velit perferendis
				reprehenderit cumque? Inventore facilis unde ab delectus error sit
				libero natus aliquid dolor. Dignissimos quas assumenda architecto cum ab
				veniam possimus voluptas quae minus ipsam dolor cumque est dolores
				repudiandae aliquid fuga eum corporis perspiciatis facilis sapiente
				eaque, quo consectetur. Molestiae consequuntur minima et molestias,
				saepe cupiditate qui laboriosam reiciendis quam mollitia. Aspernatur,
				accusantium nisi obcaecati nulla fugit perspiciatis fuga temporibus
				quidem blanditiis labore aperiam impedit tempore laboriosam ipsum beatae
				natus minima quis repudiandae? Veritatis dolorum iste dignissimos eius
				sequi obcaecati labore est, temporibus tempora eveniet perferendis
				mollitia atque sed numquam repudiandae ratione velit quaerat itaque.
				Repellat tempora dolorem dignissimos officiis et eaque maiores mollitia
				quisquam voluptatibus est ex veritatis pariatur in itaque necessitatibus
				neque quaerat quos, suscipit repudiandae, dolorum sed soluta temporibus.
				Dolor ullam at qui molestias repudiandae tenetur accusamus voluptatum.
				Totam doloremque nisi ut, quis ullam perspiciatis hic nesciunt doloribus
				tenetur autem facilis commodi recusandae sequi reprehenderit sed!
				Inventore voluptate cumque ut quia tempora nulla qui, fuga quasi
				laudantium repellat pariatur quae, repellendus vitae, autem optio
				tempore libero ratione harum quidem tenetur odio earum. Mollitia earum
				voluptate dolores! Cupiditate nesciunt ipsa eius, quia adipisci magni
				quas repellendus officiis hic quod nihil modi dolores, sunt tempora
				veritatis laborum accusamus dolore possimus voluptates vitae? Harum et
				tempora impedit ex explicabo maxime consectetur placeat numquam rerum
				similique. Pariatur veritatis dolorum ullam. Perferendis porro
				voluptatum illo natus nulla enim non suscipit dolores ab quibusdam quia,
				quos assumenda dolor inventore numquam amet, reprehenderit praesentium
				eligendi tempora fugiat iusto facere sed. Nesciunt non debitis sequi quo
				iste nostrum aspernatur modi repellat commodi, vero nihil! Vero eos quis
				ipsa molestiae necessitatibus sunt enim alias ratione ea iusto neque,
				cupiditate hic ipsam corrupti, deserunt sit vel atque rem distinctio
				asperiores nisi qui! Qui eos officiis facere, animi dolores magni neque
				nam reiciendis. Reprehenderit, error eius! In iure cumque, natus
				doloribus aliquam numquam autem ad minima nesciunt quod, blanditiis id
				officia pariatur laboriosam aut minus distinctio neque placeat! Fugit
				tempore neque iste, consectetur iusto reiciendis culpa? Commodi vel
				cupiditate voluptates ratione expedita vero odio quia maxime, a, modi,
				explicabo maiores iusto nobis laboriosam nulla minus libero pariatur!
				Non quod aut nostrum dolor fuga velit incidunt deserunt quis maxime,
				dignissimos perferendis unde ipsum consequatur fugit, iusto ullam
				repellat vel odio similique optio! Reiciendis perferendis, a veniam
				optio vel nemo rem sit beatae dolor eum ex ad voluptatem obcaecati error
				esse expedita quod cumque provident asperiores et suscipit fugit! Nihil
				voluptate deserunt optio debitis repudiandae laborum officiis, porro,
				provident nesciunt alias, labore architecto. Qui nesciunt nostrum quidem
				reiciendis veniam distinctio accusantium tempora fugiat dolorum
				accusamus aliquam suscipit natus quae corporis rem, laudantium iste
				rerum repellendus? Architecto nesciunt magni, nemo cumque reprehenderit
				ut dicta minus perspiciatis voluptatibus unde, esse recusandae
				repudiandae natus nisi magnam optio aspernatur explicabo. Enim, error
				inventore corrupti hic veritatis perferendis molestiae facere quis culpa
				voluptatem quaerat consectetur a minus saepe maxime incidunt ut ullam
				minima odit esse, tenetur odio maiores vero unde. Voluptas optio
				officiis distinctio voluptatum nihil quia rem laboriosam et, officia
				quos praesentium asperiores eius quaerat accusamus consectetur inventore
				similique debitis necessitatibus aliquid libero, quo neque voluptatibus
				modi. Aperiam exercitationem, inventore blanditiis sapiente enim
				doloremque laborum quaerat recusandae, dolores itaque dolorem quasi,
				illo facere maxime suscipit? Consectetur ullam quasi corrupti,
				distinctio fuga hic enim sequi libero odio a excepturi ab modi
				reprehenderit dicta dolores suscipit nam maiores dolore consequatur
				eveniet? Maiores, laudantium vel consequatur non odit commodi. Eius
				quaerat sunt porro ullam ratione rerum perferendis, velit in iste animi
				iure aspernatur laudantium, a molestiae et necessitatibus! Itaque
				necessitatibus aliquid consequatur doloribus dolores! Quae dicta quam
				sit fugiat ipsam aliquid labore, explicabo eaque doloremque ut natus
				perspiciatis mollitia nobis quidem modi ullam, enim nulla alias. Quo
				laboriosam aliquid repellat nobis velit omnis impedit magnam
				reprehenderit doloremque! Officiis omnis ab dolorem magnam rerum et sed
				cumque animi minus?
			</p>
		</div>
	);
}

export default App;

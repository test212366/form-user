
function createElem() {
	const modal = document.createElement('div')
	modal.classList.add('modal')
	modal.insertAdjacentHTML('afterbegin', `
		<div class="modal__overlay"></div>
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<form class="modal-body" id="form">
					<input class="m" type="name" id="name" required placeholder="Name">
					<input class="m" type="email" id="email" required placeholder="Email">
					<input class="m" type="password" id="password" required placeholder="password">
					<div class="desc">
						<div class="left">
							<div class="item">
								<input type="checkbox" id="male" required>
								<label for="male">Male</label>
							</div>
							<div class="item">
								<input type="checkbox" id="female" required>
								<label for="female">Female</label>
							</div>
							<div class="item">
								<input type="checkbox" id="other" required>
								<label for="other">Other</label>
							</div>


						</div>
						<div class="right">
							<input type="text" id="bithday" placeholder="birthbay" required>
						</div>

					</div>
					<div class="footer">
						<input type="checkbox" id="rules" required>
						<label for="rules">rules API bootstrap JS React.js but.k</label>

					</div>
					<button type="submit" id="submit">sent</button>
				</form>
			</div>	
	`)
	document.body.appendChild(modal)
	return modal
}
createElem()


const modal = document.querySelector('.modal')
const button = document.getElementById('buttonModal'),
	overlay = document.querySelector('.modal__overlay')
overlay.addEventListener('click', closeModal)
button.addEventListener('click', openModal)

function closeModal() {
	modal.classList.remove('active')
}

function openModal() {

	modal.classList.add('active')
}